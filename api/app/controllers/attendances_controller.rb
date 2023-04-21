class AttendancesController < ApplicationController

    load_and_authorize_resource 
    def index
        attendances = Attendance.all
        if current_user.role == "student"
            attendances = current_user.attendances
        end
        # else
        # if can? :read, attendances
            render json: attendances
    end

    def show
        # attendance = Attendance.find_by(id: params[:id])
        
        student = User.find_by(id: params[:id])
        pp student
        attendances = student.attendances
        if can? :read, attendances
            render json: attendances, status: :ok
        end
    # if user.role == "student"
    # elsif user.role == "teacher"
    #     render json: attendance
    end

    def create
        attendance = Attendance.create!(attendance_params)
        render json: attendance, status: :created
    end
    def update
        attendance = Attendance.find_by(id: params[:id])
        attendance.update(attendance_params)
        render json: attendance
    end
    def destroy
        attendance = Attendance.find_by(id: params[:id])
        attendance.destroy
        render json: {error: "Attendance not found"}, status: :not_found
    end
    
    private
    def attendance_params
        params.permit(:date, :present, :user_id)
    end
end