class CreateContents < ActiveRecord::Migration[7.0]
  def change
    create_table :contents do |t|
      t.string :name
      t.string :description
      t.string :body
      t.integer :course_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
