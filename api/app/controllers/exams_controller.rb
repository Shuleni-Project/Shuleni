class ExamsController < ApplicationController
    def index
        exam = Exam.all
        if current_user.role == "student"
            exam = current_user.exams
        end
        render json: exam
    end
    def show
        exam = Exam.find_by(id: params[:id])
        render json: exam
    end
    def create
        exam = Exam.create(exam_params)
        render json: exam, status: :created
    end
    def update
        exam = Exam.find_by(id: params[:id])
        exam.update(exam_params)
        render json: exam, status: :ok
    end
    def destroy
        exam = Exam.find_by(id: params[:id])
        exam.destroy
    end
    private
    def exam_params
        params.permit(:unit_id, :user_id, :duration)
    end
end
