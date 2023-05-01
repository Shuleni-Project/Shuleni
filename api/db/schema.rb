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

ActiveRecord::Schema[7.0].define(version: 2023_04_25_205839) do
  create_table "assignments", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.text "body"
    t.date "due_date"
    t.integer "course_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "attendances", force: :cascade do |t|
    t.date "date"
    t.boolean "present"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_attendances_on_user_id"
  end

  create_table "chats", force: :cascade do |t|
    t.text "message"
    t.integer "user_id", null: false
    t.integer "unit_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["unit_id"], name: "index_chats_on_unit_id"
    t.index ["user_id"], name: "index_chats_on_user_id"
  end

  create_table "contents", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "body"
    t.integer "course_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "courses", force: :cascade do |t|
    t.string "lesson"
    t.text "body"
    t.string "description"
    t.string "name"
    t.integer "unit_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "exams", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.text "body"
    t.integer "duration"
    t.integer "unit_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["unit_id"], name: "index_exams_on_unit_id"
  end

  create_table "libraries", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "resource_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["resource_id"], name: "index_libraries_on_resource_id"
    t.index ["user_id"], name: "index_libraries_on_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.text "content"
    t.integer "user_id", null: false
    t.integer "unit_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["unit_id"], name: "index_messages_on_unit_id"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "resources", force: :cascade do |t|
    t.string "name"
    t.string "file_url"
    t.integer "unit_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["unit_id"], name: "index_resources_on_unit_id"
  end

  create_table "schools", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.text "body"
    t.string "address"
    t.integer "contact_details"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "student_assignments", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.text "body"
    t.string "status"
    t.integer "user_id", null: false
    t.integer "assignment_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "units", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.text "body"
    t.integer "school_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["school_id"], name: "index_units_on_school_id"
  end

  create_table "user_exams", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.text "body"
    t.integer "score"
    t.integer "user_id", null: false
    t.integer "exam_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["exam_id"], name: "index_user_exams_on_exam_id"
    t.index ["user_id"], name: "index_user_exams_on_user_id"
  end

  create_table "user_units", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "unit_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.integer "role"
    t.string "course"
    t.string "gender"
    t.integer "school_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["school_id"], name: "index_users_on_school_id"
  end

  create_table "video_conferences", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "unit_id", null: false
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
  add_foreign_key "libraries", "resources"
  add_foreign_key "libraries", "users"
  add_foreign_key "messages", "units"
  add_foreign_key "messages", "users"
  add_foreign_key "resources", "units"
  add_foreign_key "units", "schools"
  add_foreign_key "user_exams", "exams"
  add_foreign_key "user_exams", "users"
  add_foreign_key "users", "schools"
  add_foreign_key "video_conferences", "units"
  add_foreign_key "video_conferences", "users"
end
