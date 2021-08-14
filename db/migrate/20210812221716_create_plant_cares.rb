class CreatePlantCares < ActiveRecord::Migration[6.1]
  def change
    create_table :plant_cares do |t|
      t.references :user, null: false, foreign_key: true
      t.references :plant, null: false, foreign_key: true
      t.date :date_edit
      t.text :notes
      t.date :date_acq

      t.timestamps
    end
  end
end
