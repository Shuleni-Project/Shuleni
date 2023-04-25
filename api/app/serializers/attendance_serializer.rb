class AttendanceSerializer < ActiveModel::Serializer
  attributes :id, :date, :present
  has_one :user
end
