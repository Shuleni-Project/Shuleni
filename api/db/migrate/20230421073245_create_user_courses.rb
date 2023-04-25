class CreateUserCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :user_courses do |t|
      t.references :unit, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
