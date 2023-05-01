class Course < ApplicationRecord
    belongs_to :unit
    # has_many :user_courses
    has_many :users, through: :unit
    has_many :contents
    has_many :assignments
    has_many :student_assignments, through: :assignments
end
