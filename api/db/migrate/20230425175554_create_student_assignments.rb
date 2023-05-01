class CreateStudentAssignments < ActiveRecord::Migration[7.0]
    def change
      create_table :student_assignments do |t|
        t.string :name
        t.string :description
        t.text :body
        t.string :status
        t.integer :user_id, null: false, foreign_key: true
        t.integer :assignment_id, null: false, foreign_key: true
  
        t.timestamps
      end
    end
  end
  