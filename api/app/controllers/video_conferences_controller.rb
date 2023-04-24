class VideoConferencesController < ApplicationController
    def index
        video = VideoConference.all
        if current_user.role == "student"
            video = current_user.video_conferences
        end
        render json: video
    end
    def show
        video = VideoConference.find_by(id: params[:id])
        render json: video, status: :ok
    end
    def create
        video = VideoConference.create(video_params)
        render json: video, status: :created
    end
    def update
        video = VideoConference.find_by(id: params[:id])
        video.update(video_params)
        render json: video, status: :ok
    end
    def destroy
        video = VideoConference.find_by(id: params[:id])
        video.destroy
    end
    private
    def video_params
        params.permit(:user_id, :unit_id, :meeting_url, :meeting_name)
end
