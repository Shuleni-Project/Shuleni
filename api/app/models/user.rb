class User < ApplicationRecord
  belongs_to :school
  has_secure_password
  has_many :attendances
  has_many :user_units,  dependent: :destroy
  has_many :units, through: :user_units
  has_many :users, through: :user_units
  has_many :exams, through: :units
  has_many :user_exams, through: :exams
  has_many :courses, through: :units
  has_many :contents, through: :courses
  has_many :assignments, through: :courses
  has_many :student_assignments
  has_many :video_conferences
  has_many :libraries
  has_many :resources, through: :libraries
  enum role: {student:0, teacher:1, admin:2}

  validates :email, uniqueness: true

  def generate_jwt
    payload = { user_id: id }
    JsonWebToken.encode(payload)
  end
end
