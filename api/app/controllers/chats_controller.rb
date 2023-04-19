class ChatsController < ApplicationController
    def index 
        chats = Chat.all
        render json: chats
    end
    def show
        chats = Chat.find_by(id: params[:id])
        render json: chats, status: :ok
    end
    def create
        chats = Chat.create(chats_params)
        render json: chats, status: :created
    end
    def update
        chats = Chat.find_by(id: params[:id])
        chats.update(chats_params)
        render json: chats, status: :ok
    end
    def destroy
        chats = Chat.find_by(id: params[:id])
        chats.destroy
        render json: {error: "Chat not found"}, status: :not_found
    end
    private
    def chat_params
        params.permit(:message)
    end
end
