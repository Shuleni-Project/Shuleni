class VideoConferencesController < ApplicationController
  before_action :set_video_conference, only: [:show, :edit, :update, :destroy]

  def index
    @video_conferences = VideoConference.all
    render json: @video_conferences
  end

  def show
    render json: @video_conference
  end

  def new
    @video_conference = VideoConference.new
  end

  def create
    @video_conference = VideoConference.new(video_conference_params)

    if @video_conference.save
      render json: @video_conference, status: :created, location: @video_conference
    else
      render json: @video_conference.errors, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @video_conference.update(video_conference_params)
      render json: @video_conference
    else
      render json: @video_conference.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @video_conference.destroy
    head :no_content
  end

  private

  def set_video_conference
    @video_conference = VideoConference.find(params[:id])
  end

  def video_conference_params
    params.require(:video_conference).permit(:user_id, :unit_id, :meeting_url, :meeting_name)
  end
end

