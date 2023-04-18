class SchoolSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :contact_details
end
