class User < ApplicationRecord
  belongs_to :school
  has_secure_password
  enum role: [:student, :teacher, :admin]
end
