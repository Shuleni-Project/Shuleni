class ResourcesController < ApplicationController
    def index
        resource = Resource.all
        if current_user.role == "student"
            resource = current_user.resources
        end
        render json: resource
    end
end
