class VideoConferencesController < ApplicationController
    def index
        video = VideoConference.all
        render json: video
    end
end
