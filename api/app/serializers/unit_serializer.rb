class UnitSerializer < ActiveModel::Serializer
  attributes :id, :name, :school_id, :body, :description, :courses
  has_many :user_units
  # has_many :users
  def courses
    object.courses.uniq
  end
end
