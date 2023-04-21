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
        
    end
end
