class ChatRoomChannel < ApplicationCable::Channel
  def subscribed
    @unit_id = params[:unit_id]
    stream_for chat_room
    send_messages
  end

  def receive(data)
    @message = Message.create(data)
    ChatRoomChannel.broadcast_to(chat_room, { type: 'broadcast', message: @message })
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  private
  
  def send_messages
    messages = Message.where(unit_id: params[:unit_id])
    messages.each do |message|
      ChatRoomChannel.broadcast_to(chat_room, { type: 'broadcast', message: message })
    end
  end

  def chat_room
    "chat_room_unit_#{@unit_id}"
  end
end
