class ExamSerializer < ActiveModel::Serializer
  attributes :id, :duration
  has_one :unit
  has_one :user
end
