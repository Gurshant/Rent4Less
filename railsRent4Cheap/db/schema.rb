# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_09_061031) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.integer "bedroom"
    t.integer "bathroom"
    t.integer "sqft"
    t.boolean "ac"
    t.integer "fireplace"
    t.boolean "deck"
    t.integer "price"
    t.text "description"
    t.boolean "is_active"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id", null: false
    t.integer "street_number"
    t.string "route"
    t.string "locality"
    t.string "administrative_area_level_1"
    t.string "postal_code"
    t.string "country"
    t.string "latitude"
    t.string "longitude"
    t.boolean "pet_friendly"
    t.boolean "smoking"
    t.boolean "parking"
    t.boolean "gym"
    t.boolean "laundromat"
    t.index ["user_id"], name: "index_listings_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.boolean "is_admin", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "phone"
    t.boolean "admin", default: false
  end

  add_foreign_key "listings", "users"
end
