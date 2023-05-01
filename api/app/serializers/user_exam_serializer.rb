class UserExamSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :exam_id, :name, :description, :body, :score
  belongs_to :user
  belongs_to :exam
  has_one :unit, through: :exam
end
