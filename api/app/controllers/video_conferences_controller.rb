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
  
