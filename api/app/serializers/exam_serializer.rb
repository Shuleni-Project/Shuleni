class ExamSerializer < ActiveModel::Serializer
  attributes :id, :unit_id, :duration, :body, :description, :name
  has_one :unit
  has_many :user_exams
end
