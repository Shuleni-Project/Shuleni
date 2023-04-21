class ChatRoomChannel < ApplicationCable::Channel
  def subscribed
    @unit_id = params[:unit_id]
    stream_for chat_room
  end

  def receive(data)
    Message.create(data)
    # ChatRoomChannel.broadcast_to(chat_room, { type: 'broadcast', message: data })
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  private

  def chat_room
    "chat_room_unit_#{@unit_id}"
  end
end
