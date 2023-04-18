class UnitSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :school
  has_one :user
end
