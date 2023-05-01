class SchoolSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :contact_details, :students_count, :teachers_count, :units, :courses, :new_students, :new_teachers, :courses_count, :new_courses, :units_count, :new_units, :students, :teachers
  
  def students_count
    students.count || 0
  end

  def students
    object.users.where(role: "student")
  end

  def teachers_count
    teachers.count || 0
  end

  def teachers
    object.users.where(role: "teacher")
  end

  def classes
    object.units
  end

  def new_students
    get_users_count "student"
  end

  def new_teachers
    get_users_count "teacher"
  end

  def courses_count
    object.courses.count
  end

  def new_courses
    object.courses.where(created_at: (Time.zone.yesterday - 30).beginning_of_day..Time.zone.today.end_of_day).count
  end

  def units_count
    object.units.count
  end

  def new_units
    object.units.where(created_at: (Time.zone.yesterday - 30).beginning_of_day..Time.zone.today.end_of_day).count
  end


  private

  def get_users_count role
    object.users.where(created_at: (Time.zone.yesterday - 7).beginning_of_day..Time.zone.today.end_of_day, role: role).count
  end
  
  
end
