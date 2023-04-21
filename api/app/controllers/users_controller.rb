class UsersController < ApplicationController
    def index
        user = User.all
        render json: user, status: :ok

        # get the users attendance from the attandance table
    end
    def create
    end
end
