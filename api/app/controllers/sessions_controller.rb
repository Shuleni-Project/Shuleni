class SessionsController < ApplicationController
    before_action :authorize_request, except: [:create]
    def new
    end
  
    def create
      user = User.find_by(email: params[:email])
      user = User.find_by(email: params[:email])
      if user && user.authenticate(params[:password])
        render json: { token: user.generate_jwt, user: UserSerializer.new(user) }
      else
        render json: { error: 'Invalid email or password' }, status: :unauthorized
      end
    end
  
    def destroy
      session[:user_id] = nil
      render json: {message: "Logged out succefully"}, status: :not_found
    end
  end
  