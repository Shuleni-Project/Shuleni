class LibrariesController < ApplicationController
    def index 
        library = Library.all
        render json: library
    end
    def show
        library = Library.find_by(id: params[:id])
        
    end
end
