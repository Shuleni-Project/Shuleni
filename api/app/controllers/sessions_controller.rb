class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:email])
    if user.present? && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: {error: "Invalid email or password"}, status: :unprocessable_entity
    end
  end

  def destroy
    session[:user_id] = nil
    render json: {message: "Logged out succefully"}, status: :not_found
  end
end
