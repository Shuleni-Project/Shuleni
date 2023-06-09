class UnitsController < ApplicationController
    def index
        unit = []
        if @current_user.role == "student"
            unit = @current_user.units
        else
            unit = @current_user.school.units
        end
        render json: unit
    end
    def show
        unit = Unit.find_by(id: params[:id])
        render json: unit, status: :ok
    end
    def create
        unit = Unit.create(unit_params)
        render json: unit.school.users.find_by(email: params[:creator]), status: :ok
    end
    # def update
    #     owner = find_owner
    #     owner.units.find(params[:])update(unit_params)
    #     render json: unit, status: :ok
    # end
    # def destroy
    #     unit = Unit.find_by(id: params[:id])
    #     unit.destroy, status: :not_found
    # end
    private
    # def find_owner
    #     Owner.find_by(id: params[:id])
    # end
    def unit_params
        params.permit(:name, :school_id, :body, :description)
    end
end