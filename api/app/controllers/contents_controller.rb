class ContentsController < ApplicationController
    before_action :set_content, only: %i[ show update destroy ]
  
    # GET /contents
    def index
      
      render json: @current_user.contents
    end
  
    # GET /contents/1
    def show
      @contents = Course.find(params[:id]).content
      render json: @contents
    end
  
    # POST /contents
    def create
      @content = Content.new(content_params)
  
      if @content.save
        render json: @content.school.users.find_by(email: params[:creator])
      else
        render json: @content.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /contents/1
    def update
      if @content.update(content_params)
        render json: @content
      else
        render json: @content.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /contents/1
    def destroy
      @content.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_content
        @content = Content.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def content_params
        params.require(:content).permit(:name, :description, :body, :course_id)
      end
  end
  