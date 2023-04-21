class VideoConferencesController < ApplicationController
    def index
        video = VideoConference.all
        if current_user.role == "student"
            video = current_user.video_conferences
        end
        render json: video
    end
end
