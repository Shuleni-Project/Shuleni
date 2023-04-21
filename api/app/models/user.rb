class User < ApplicationRecord
  belongs_to :school
  has_secure_password
  has_many :attendances
  has_many :exams
  has_many :units
  has_many :video_conferences
  # belongs_to :school
  has_many :libraries
  has_many :resources, through: :libraries
  enum role: {student:0, teacher:1, admin:2}
end
