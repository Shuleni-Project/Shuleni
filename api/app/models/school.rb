class School < ApplicationRecord
    has_many :users
    has_many :attendances, through: :users
    has_many :units
    has_many :courses, through: :units
    has_many :resources, through: :units
end
