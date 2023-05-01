class CreateExams < ActiveRecord::Migration[7.0]
  def change
    create_table :exams do |t|
      t.string :name
      t.string :description
      t.text :body
      t.integer :duration
      t.references :unit, null: false, foreign_key: true

      t.timestamps
    end
  end
end
