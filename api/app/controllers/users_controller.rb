class UsersController < ApplicationController
    load_and_authorize_resource 
    def index
        user = User.all
        render json: user, status: :ok

        # get the users attendance from the attandance table
    end
    def show
        user = User.find_by(id: params[:id])
        render json: user, status: :ok
    end
    def create
        user = User.create(user_params)
        render json: user, status: :created
    end
    def update
        user = User.find_by(id: params[:id])
        user.update(user_params)
        render json: user, status: :ok
    end
    def destroy
        user = User.find_by(id: params[:id])
        user.destroy
    end
    private
    def user_params
        params.permit(:username, :email, :role, :course, :gender, :password)
    end
end