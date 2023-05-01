class CourseSerializer < ActiveModel::Serializer
  attributes :id, :lesson, :name, :unit_id, :name, :description, :body
  has_many :contents
  has_many :assignments
end
