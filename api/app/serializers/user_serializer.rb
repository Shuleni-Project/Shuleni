class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password, :role, :course, :gender
  has_one :school
end
