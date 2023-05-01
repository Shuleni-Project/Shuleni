class ResourcesController < ApplicationController
    def index
        resource = Resource.all
        if @current_user.role == "student"
            resource = @current_user.resources
        end
        render json: resource
    end
    def show
        resource = Resource.find_by(id: params[:id])
        render json: resource
    end
    def create 
        resource = Resource.create(resource_params)
        render json: User.find_by(email: params[:creator]), status: :created
    end
    def update
        resource = Resource.find_by(id: params[:id])
        resource.update(resource_params)
        render json: resource, status: :ok
    end
    def destroy
        resource = Resource.find_by(id: params[:id])
        resource.destroy
    end
    private
    def resource_params
        params.permit(:name, :file_url, :unit_id)
    end
end
