class Content < ApplicationRecord
    belongs_to :user
    validates :date, uniqueness: { scope: :user_id, message: "Student can only have one attendance record per day" }
  end
  