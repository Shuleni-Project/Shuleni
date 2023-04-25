class CreateVideoConferences < ActiveRecord::Migration[7.0]
  def change
    create_table :video_conferences do |t|
      t.references :user, null: false, foreign_key: true
      t.references :unit, null: false, foreign_key: true
      t.string :meeting_url
      t.string :meeting_name

      t.timestamps
    end
  end
end
