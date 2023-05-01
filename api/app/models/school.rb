class School < ApplicationRecord
    has_many :users
    has_many :units
    has_many :courses, through: :units
end
