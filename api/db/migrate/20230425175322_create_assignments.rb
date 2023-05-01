class CreateAssignments < ActiveRecord::Migration[7.0]
  def change
    create_table :assignments do |t|
      t.string :name
      t.string :description
      t.text :body
      t.date :due_date
      t.integer :course_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
