class ContentSerializer < ActiveModel::Serializer
    attributes :id, :name, :description, :body, :course_id
  end
  