class ChatSerializer < ActiveModel::Serializer
  attributes :id, :message
  has_one :user
  has_one :unit
end
