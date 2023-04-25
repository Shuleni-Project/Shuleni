class ApplicationController < ActionController::API
    # protect_from_forgery with: :null_session
    # before_action :authenticate_user!, except: [:signup, :login]
    # rescue_from CanCan::AccessDenied do |_exception|
    # end
    rescue_from CanCan::AccessDenied, with: :access_denied
    
    private
    
    def access_denied
      render json: "Access denied", status: :unauthorized
    end

    def current_user
      @current_user ||= User.find_by(id: session[:user_id])
    end

    def authenticate_user!
      unless user_signed_in?
        render json: { error: "Signup or Login to Access the Site!" }, status: :unauthorized
      end
    end

    def user_signed_in?
      current_user.present?
    end

end
