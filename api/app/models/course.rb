class Course < ApplicationRecord
    has_many :user_courses
    has_many :users, through: :user_courses
    belongs_to :unit
end
