class AssignmentSerializer < ActiveModel::Serializer
    attributes :id, :name, :description, :body, :due_date, :course_id, :student_assignments
  end
  