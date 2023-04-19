class UsersController < ApplicationController
    def index
        user = User.all
        # attendance = Attendance.find_by(user_id: params[:user_id])
        # pp attendance
        render json: user, status: :ok

        # get the users attendance from the attandance table
    end
    def student_attendance
        
    end
    def create
    end
end
