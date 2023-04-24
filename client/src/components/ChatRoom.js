import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActionCable from 'actioncable';


const webSocketUrl = `ws://localhost:3000/cable`;
const webSocket = new WebSocket(webSocketUrl);

let changes = 0;


const ChatRoom = ({userId = 5}) => {
  const { unitId } = useParams();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [text, setText] = useState('');
  const [channel, setChannel] = useState({unsubscribe:()=>{}});

  useEffect(()=>{
    webSocket.onopen = function(event) {
      // subscribe to chat room channel
      const payload = {
        command: 'subscribe',
        identifier: JSON.stringify({ channel: 'ChatRoomChannel', unit_id: unitId })
      };
      
      webSocket.send(JSON.stringify(payload));
      // console.log(JSON.parse(event.data))
    };
    
    webSocket.addEventListener('message', function (event) {
      event = JSON.parse(event.data)
      console.log(event)
      console.log(event.message?.messages)
      if(event.message?.message){
        setMessage(event.message.message)
        changes++;
      }else if(event.message?.messages){
        setMessage(event.message.messages)
      }
    });
    
    webSocket.onerror = function(error) {
      console.error('WebSocket error:', error);
    };
    
    webSocket.onclose = function(event) {
      console.log('WebSocket closed:', event);
    };
  },[])
  
  useEffect(()=>{
    console.log(changes)
    console.log('\npushing message')
    setMessages([...messages, message])
  },[changes])

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      command: 'message',
      identifier: JSON.stringify({ channel: 'ChatRoomChannel', unit_id: unitId }),
      data: JSON.stringify({ content: text, user_id: userId, unit_id: unitId })
    };
    
    webSocket.send(JSON.stringify(payload));
    setText('');
  };

  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>{message.content}</div>
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