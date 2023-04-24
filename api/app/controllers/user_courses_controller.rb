class UserCoursesController < ApplicationController
  before_action :set_user_course, only: %i[ show update destroy ]

  # GET /user_courses
  def index
    @user_courses = UserCourse.all

    render json: @user_courses
  end

  # GET /user_courses/1
  def show
    render json: @user_course
  end

  # POST /user_courses
  def create
    @user_course = UserCourse.new(user_course_params)

    if @user_course.save
      render json: @user_course, status: :created, location: @user_course
    else
      render json: @user_course.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_courses/1
  def update
    if @user_course.update(user_course_params)
      render json: @user_course
    else
      render json: @user_course.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_courses/1
  def destroy
    @user_course.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_course
      @user_course = UserCourse.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_course_params
      params.fetch(:user_course, {})
    end
end
