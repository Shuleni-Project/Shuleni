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

ActiveRecord::Schema[7.0].define(version: 2023_04_21_073245) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attendances", force: :cascade do |t|
    t.date "date"
    t.boolean "present"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_attendances_on_user_id"
  end

  create_table "chats", force: :cascade do |t|
    t.text "message"
    t.bigint "user_id", null: false
    t.bigint "unit_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["unit_id"], name: "index_chats_on_unit_id"
    t.index ["user_id"], name: "index_chats_on_user_id"
  end

  create_table "courses", force: :cascade do |t|
    t.string "lesson"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "exams", force: :cascade do |t|
    t.bigint "unit_id", null: false
    t.bigint "user_id", null: false
    t.integer "duration"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["unit_id"], name: "index_exams_on_unit_id"
    t.index ["user_id"], name: "index_exams_on_user_id"
  end

  create_table "libraries", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "resource_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["resource_id"], name: "index_libraries_on_resource_id"
    t.index ["user_id"], name: "index_libraries_on_user_id"
  end

  create_table "resources", force: :cascade do |t|
    t.string "name"
    t.string "file_url"
    t.bigint "unit_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["unit_id"], name: "index_resources_on_unit_id"
  end

  create_table "schools", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.integer "contact_details"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "units", force: :cascade do |t|
    t.string "name"
    t.integer "course_id"
    t.bigint "school_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["school_id"], name: "index_units_on_school_id"
    t.index ["user_id"], name: "index_units_on_user_id"
  end

  create_table "user_courses", force: :cascade do |t|
    t.bigint "unit_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["unit_id"], name: "index_user_courses_on_unit_id"
    t.index ["user_id"], name: "index_user_courses_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.integer "role"
    t.string "course"
    t.string "gender"
    t.bigint "school_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["school_id"], name: "index_users_on_school_id"
  end

  create_table "video_conferences", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "unit_id", null: false
    t.string "meeting_url"
    t.string "meeting_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["unit_id"], name: "index_video_conferences_on_unit_id"
    t.index ["user_id"], name: "index_video_conferences_on_user_id"
  end

  add_foreign_key "attendances", "users"
  add_foreign_key "chats", "units"
  add_foreign_key "chats", "users"
  add_foreign_key "exams", "units"
  add_foreign_key "exams", "users"
  add_foreign_key "libraries", "resources"
  add_foreign_key "libraries", "users"
  add_foreign_key "resources", "units"
  add_foreign_key "units", "schools"
  add_foreign_key "units", "users"
  add_foreign_key "user_courses", "units"
  add_foreign_key "user_courses", "users"
  add_foreign_key "users", "schools"
  add_foreign_key "video_conferences", "units"
  add_foreign_key "video_conferences", "users"
end
