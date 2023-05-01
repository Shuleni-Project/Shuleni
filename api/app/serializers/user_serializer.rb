class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :role, :gender, :units, :courses_content_and_assignments, :user_exams
  has_many :exams
  has_many :courses
  has_many :contents
  has_many :user_exams
  has_many :attendances
  has_many :assignments
  has_many :student_assignments
  has_many :users
  has_one :school

  def courses_content_and_assignments
    courses.map{| course| {course: course, 
      assignments: course.assignments.map{|assignment|{assignment: assignment, student_assignment: StudentAssignment.find_by(user_id: object.id) || false  }}, 
      contents: course.contents
      }}
  end
  
  def courses
    object.courses.uniq
  end
  
  def units
    object.units.uniq
  end

  # def assignments
  # end
  
end
