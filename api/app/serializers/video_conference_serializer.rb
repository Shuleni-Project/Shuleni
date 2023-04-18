class VideoConferenceSerializer < ActiveModel::Serializer
  attributes :id, :meeting_url, :meeting_name
  has_one :user
  has_one :unit
end
