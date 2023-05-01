class Exam < ApplicationRecord
  belongs_to :unit
  has_one :school, through: :unit
  has_many :user_exams
  has_many :user_exams
  has_many :users, through: :user_exams
end
