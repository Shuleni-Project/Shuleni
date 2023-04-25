class Unit < ApplicationRecord
  belongs_to :school
  belongs_to :user
  has_many :courses
end
