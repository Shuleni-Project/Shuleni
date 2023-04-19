class ResourcesController < ApplicationController
    def index
        resource = Resource.all
        render json: resource
    end
end
