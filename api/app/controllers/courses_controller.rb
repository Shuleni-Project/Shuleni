class CoursesController < ApplicationController
  # before_action :set_course, only: %i[ show update destroy ]
  # load_and_authorize_resource
  # GET /courses
  def index
    courses = Course.all
    puts @current_user
    if @current_user.role != "admin"
      courses = @current_user.school.courses.uniq
    else
      courses = @current_user.courses.uniq
    end
    render json: courses
  end

  # GET /courses/1
  def show
    render json: set_course.contents
  end

  # POST /courses
  def create
    @course = Course.create(course_params)

    if @course
      render json: @course.unit.school.users.find_by(email: params[:creator])
    else
      render json: @course.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /courses/1
  def update
    if @course.update(course_params)
      render json: @course
    else
      render json: @course.errors, status: :unprocessable_entity
    end
  end

  # DELETE /courses/1
  def destroy
    @course.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_course
      @course = Course.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def course_params
      params.permit(:lesson, :name, :unit_id, :name, :description, :body)
    end
end
