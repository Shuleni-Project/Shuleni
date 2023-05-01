class UserUnitsController < ApplicationController
    before_action :set_user_unit, only: %i[ show update destroy ]
  
    # GET /user_units
    def index
      @user_units = UserUnit.all
  
      render json: @user_units
    end
  
    # GET /user_units/1
    def show
      render json: @user_unit
    end
  
    # POST /user_units
    def create
      @user_unit = UserUnit.new(user_unit_params)
  
      if @user_unit.save
        render json: @user_unit, status: :created, location: @user_unit
      else
        render json: @user_unit.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /user_units/1
    def update
      if @user_unit.update(user_unit_params)
        render json: @user_unit
      else
        render json: @user_unit.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /user_units/1
    def destroy
      @user_unit.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_user_unit
        @user_unit = UserUnit.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def user_unit_params
        params.require(:user_unit).permit(:user_id, :unit_id)
      end
  end
  