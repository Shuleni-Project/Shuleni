import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActionCable from 'actioncable';





const ChatRoom = () => {
  const { unitId } = useParams();
  const webSocketUrl = `ws://localhost:3000/cable`;

  const webSocket = new WebSocket(webSocketUrl);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [channel, setChannel] = useState({unsubscribe:()=>{}});
  
  
  
  useEffect(() => {

    webSocket.onopen = function(event) {
      // subscribe to chat room channel
      const payload = {
        command: 'subscribe',
        identifier: JSON.stringify({ channel: 'ChatRoomChannel', unit_id: unitId })
      };
    
      webSocket.send(JSON.stringify(payload));
    };

    webSocket.addEventListener('message', function (event) {
      event = (JSON.parse(event.data))
      console.log(event.type)
        if(typeof event.message === "object"){
          console.log('WebSocket message received:', event.message);
          event.message && setMessages([...messages, event.message?.message?.body])
        }
    });
    webSocket.onerror = function(error) {
      console.error('WebSocket error:', error);
    };
    
    webSocket.onclose = function(event) {
      console.log('WebSocket closed:', event);
    };

    // return () => {
    //   webSocket.close();;
    // };
  }, [messages]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      command: 'message',
      identifier: JSON.stringify({ channel: 'ChatRoomChannel', unit_id: unitId }),
      data: JSON.stringify({ body: "text" })
    };
    
    webSocket.send(JSON.stringify(payload));
    setText('');
  };

  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} className="block m-2 mb-4 rounded-md p-2 w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onChange={(e) => setText(e.target.value)} />
        <button type="submit"
         data-te-ripple-init
         data-te-ripple-color="light"
         className="block flex-1 rounded bg-stone-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-stone-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-stone-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-stone-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">Send</button>
      </form>
    </div>
  );
};

export default ChatRoom;