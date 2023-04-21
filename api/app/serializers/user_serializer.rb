class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :role, :course, :gender
  has_one :school
end
