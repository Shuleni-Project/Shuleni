class Unit < ApplicationRecord
  belongs_to :school
  has_many :courses
  has_many :assignments, through: :courses
  # has_many :student_assignments, :through :assignments
  has_many :exams
  has_many :user_units
  has_many :users, through: :user_units
end
