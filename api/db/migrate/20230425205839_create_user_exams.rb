class CreateUserExams < ActiveRecord::Migration[7.0]
    def change
      create_table :user_exams do |t|
        t.string :name
        t.string :description
        t.text :body
        t.integer :score
        t.references :user, null: false, foreign_key: true
        t.references :exam, null: false, foreign_key: true
  
        t.timestamps
      end
    end
  end
  