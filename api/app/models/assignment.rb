class Assignment < ApplicationRecord
    belongs_to :course
    has_one :unit, through: :course
    has_one :school, through: :unit
    has_many :student_assignments
end
