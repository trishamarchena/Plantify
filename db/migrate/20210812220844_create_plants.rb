class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :name
      t.references :user, null: false, foreign_key: true
      t.string :watering_input
      t.string :sunlight_input
      t.text :other_input
      t.string :image_url

      t.timestamps
    end
  end
end
