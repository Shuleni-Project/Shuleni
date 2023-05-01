class StudentAssignmentsController < ApplicationController
    before_action :set_student_assignment, only: %i[ show update destroy ]
  
    # GET /student_assignments
    def index
      @student_assignments = StudentAssignment.all
  
      render json: @student_assignments
    end
  
    # GET /student_assignments/1
    def show
      render json: @student_assignment
    end
  
    # POST /student_assignments
    def create
      @student_assignment = StudentAssignment.create(student_assignment_params)
  
      if @student_assignment.save
        render json: @student_assignment.user, status: :created, location: @student_assignment
      else
        render json: @student_assignment.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /student_assignments/1
    def update
      if @student_assignment.update(student_assignment_params)
        render json: @student_assignment.user
      else
        render json: @student_assignment.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /student_assignments/1
    def destroy
      @student_assignment.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_student_assignment
        @student_assignment = StudentAssignment.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def student_assignment_params
        params.require(:student_assignment).permit(:user_id, :assignment_id, :body, :status, :name, :description)
      end
  end
  