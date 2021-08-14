# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_12_221716) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "plant_cares", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "plant_id", null: false
    t.date "date_edit"
    t.text "notes"
    t.date "date_acq"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["plant_id"], name: "index_plant_cares_on_plant_id"
    t.index ["user_id"], name: "index_plant_cares_on_user_id"
  end

  create_table "plants", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id", null: false
    t.string "watering_input"
    t.string "sunlight_input"
    t.text "other_input"
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_plants_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "plant_cares", "plants"
  add_foreign_key "plant_cares", "users"
  add_foreign_key "plants", "users"
end
