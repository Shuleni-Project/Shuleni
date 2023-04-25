class LibrariesController < ApplicationController
    def index 
        library = Library.all
        if current_user.role == "student"
            library = current_user.libraries
        end
        render json: library
    end
    def show
        library = Library.find_by(id: params[:id])
        render json: library
    end
    def create
        library = Library.create(library_params)
        render json: library, status: :created
    end
    def update
        library = Library.find_by(id: params[:id])
        library.update(library_params)
        render json: library, status: :ok
    end
    def destroy
        library = Library.find_by(id: params[:id])
        library.destroy
    end
    private
    def library_params
        params.permit(:user_id, :resource_id)
    end
end
