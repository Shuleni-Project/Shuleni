class StudentSerializer < ActiveModel::Serializer
  attributes :id, :assignments

  def assignments
    Assignment.joins(:course => {:unit => :users}).where(units: { users: { id: object.id } })
  end

  
end
