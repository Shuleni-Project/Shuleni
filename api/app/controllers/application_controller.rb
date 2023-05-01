class ApplicationController < ActionController::API
  # protect_from_forgery with: :null_session
  # skip_before_action :authenticate_user!, except: [:signup, :login]
  # rescue_from CanCan::AccessDenied do |_exception|
  # end
  before_action :authorize_request
  attr_reader :current_user
  # load_and_authorize_resource
  rescue_from CanCan::AccessDenied, with: :access_denied
  include ActionController::Cookies
  
  private
  
  def access_denied
    render json: "Access denied", status: :unauthorized
  end


  def authorize_request
    header = request.headers['Authorization']
    token = header.split(' ').last if header
    begin
      decoded = JsonWebToken.decode(token)
      @current_user = User.find(decoded[:user_id])
    rescue JWT::DecodeError
      render json: { error: 'Invalid token' }, status: :unauthorized
    end
  end

end
