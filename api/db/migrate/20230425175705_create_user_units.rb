class CreateUserUnits < ActiveRecord::Migration[7.0]
  def change
    create_table :user_units do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.integer :unit_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
