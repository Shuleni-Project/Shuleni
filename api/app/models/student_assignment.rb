class StudentAssignment < ApplicationRecord
    belongs_to :user
    belongs_to :assignment
  
    validates :assignment_id, uniqueness: { scope: :user_id, message: "can only have one assignment record per user" }
end
  