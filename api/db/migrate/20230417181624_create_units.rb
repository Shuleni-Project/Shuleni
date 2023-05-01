class CreateUnits < ActiveRecord::Migration[7.0]
  def change
    create_table :units do |t|
      t.string :name
      t.string :description
      t.text :body
      t.references :school, null: false, foreign_key: true

      t.timestamps
    end
  end
end
