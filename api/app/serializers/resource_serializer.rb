class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :name, :file_url
  has_one :unit
end
