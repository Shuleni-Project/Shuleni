class UsersController < ApplicationController
    # load_and_authorize_resource 
    before_action :authorize_request, except: [:create]
    def index
        user = @current_user.school.users
        if(@current_user.role== "teacher")
            user = @current_user.school.users.where(role: "student")
        end
        
        render json: user, status: :ok

        # get the users attendance from the attandance table
    end
    def show
        user = params[:id] ? User.find_by(id: params[:id]) : @current_user
        render json: #user.role == "teacher" ? TeacherSerializer.new(user) : 
        #user.role=="student" ? StudentSerializer.new(user) :
         user, 
        status: :ok
    end
    def create
        user = User.new(
            username: params[:username],
            email: params[:email],
            role: params[:role],
            course: params[:course],
            gender: params[:gender], 
            school_id: params[:school_id],
            password: params[:password])

        pass= SecureRandom.alphanumeric(30)
        user.password ||= pass

        
        if user.save
            UserUnit.create(user_id: user.id, unit_id: params[:course])
            MyMailer.welcome_email(user, pass).deliver_now
            if user.role != "admin"
                render json: user.school.users.find_by(email: params[:creator])
            else 
                render json: { token: user.generate_jwt, user: UserSerializer.new(user) }, status: :created
            end
        end
    end
    def update
        user = User.find_by(id: params[:id])
        user.update(user_params)
        render json: user, status: :ok
    end
    def destroy
        user = User.find_by(id: params[:id])
        puts user.email
        school = user.school
        user.destroy
        admin = school.users.find_by(role: "admin")
        render json: admin, status: :ok
    end

    
    private
    def user_params
        params.require(:user).permit(username: params[:username], email: params[:email], role: params[:role], course: params[:course], gender: params[:gender], school_id: params[:school_id] , password: params[:password])
    end
end