class User < ApplicationRecord
  belongs_to :school
  has_secure_password
  enum role: {student:0, teacher:1, admin:2}
end
