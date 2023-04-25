class SchoolsController < ApplicationController
    before_action :set_school, only: [:show, :update, :destroy]
    before_action :authorize_school, only: [:show, :update, :destroy]
    before_action :authorize_teacher, only: [:add_student, :add_teacher, :add_resource, :take_attendance]
    # GET /schools
    def index
      @schools = School.all
      if current_user.role == "student" || current_user.role == "teacher"
        @schools = current_user.school
      end
      render json: @schools
    end
    # GET /schools/1
    def show
      render json: @school
    end
    # POST /schools
    def create
      @school = School.new(school_params)
      if @school.save
        render json: @school, status: :created
      else
        render json: @school.errors, status: :unprocessable_entity
      end
    end
    # PATCH/PUT /schools/1
    def update
      if @school.update(school_params)
        render json: @school
      else
        render json: @school.errors, status: :unprocessable_entity
      end
    end
    # DELETE /schools/1
    def destroy
      @school.destroy
    end
    # POST /schools/:id/add_student
    def add_student
      @school = School.find(params[:id])
      @student = @school.students.build(student_params)
      if @student.save
        render json: @student, status: :created
      else
        render json: @student.errors, status: :unprocessable_entity
      end
    end
    # POST /schools/:id/add_teacher
    def add_teacher
      @school = School.find(params[:id])
      @teacher = @school.teachers.build(teacher_params)
      if @teacher.save
        render json: @teacher, status: :created
      else
        render json: @teacher.errors, status: :unprocessable_entity
      end
    end
    # POST /schools/:id/add_resource
    def add_resource
      @school = School.find(params[:id])
      @resource = @school.resources.build(resource_params)
      if @resource.save
        render json: @resource, status: :created
      else
        render json: @resource.errors, status: :unprocessable_entity
      end
    end
    # POST /schools/:id/take_attendance
    def take_attendance
      @school = School.find(params[:id])
      @class = @school.classes.find(params[:class_id])
      @attendance = @class.attendances.build(attendance_params)
      if @attendance.save
        render json: @attendance, status: :created
      else
        render json: @attendance.errors, status: :unprocessable_entity
      end
    end
    private
      def set_school
        @school = School.find(params[:id])
      end
      def authorize_school
        # check if current user is authorized to access this school
      end
      def authorize_teacher
        # check if current user is authorized to perform teacher actions
      end
      def school_params
        params.require(:school).permit(:name, :address, :contact_details)
      end
      def student_params
        params.require(:student).permit(:name, :email, :password)
      end
      def teacher_params
        params.require(:teacher).permit(:name, :email, :password)
      end
      def resource_params
        params.require(:resource).permit(:name, :description, :file)
      end
      def attendance_params
        params.require(:attendance).permit(:date, :present_students)
      end
    end