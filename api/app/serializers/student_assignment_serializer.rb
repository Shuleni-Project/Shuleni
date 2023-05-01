class StudentAssignmentSerializer < ActiveModel::Serializer
    attributes :id, :user_id, :assignment_id, :body, :status, :name, :description
  end
  