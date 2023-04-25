class Resource < ApplicationRecord
  belongs_to :unit
  has_many :libraries
  has_many :users, through: :libraries
end
