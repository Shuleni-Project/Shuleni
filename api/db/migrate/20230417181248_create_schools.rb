class CreateSchools < ActiveRecord::Migration[7.0]
  def change
    create_table :schools do |t|
      t.string :name
      t.string :description
      t.text :body
      t.string :address
      t.integer :contact_details

      t.timestamps
    end
  end
end
