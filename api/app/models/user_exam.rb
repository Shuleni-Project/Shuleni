class UserExam < ApplicationRecord
    belongs_to :user
    belongs_to :exam
    has_one :unit, through: :exam
    has_one :school, through: :unit
  end
  