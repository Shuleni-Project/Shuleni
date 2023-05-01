class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :role, :courses, 
  :units, :assignments
  
  has_one :school

  def self.model_name
    @_model_name ||= ActiveModel::Name.new(self, nil, "Teacher")
  end
  
  
  

  
  # def students
  #   User.joins(:units).where(units: { id: object.units.ids }).where(role: "student")
  # end


  
  # def exams
  #   Exam.joins(:unit => :users).where(units: { users: { id: object.id } })
  # end
  
  
end
