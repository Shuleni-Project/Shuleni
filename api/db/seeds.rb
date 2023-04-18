# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'

# Seed data for schools
10.times do
    School.create(
      name: Faker::University.name,
      address: Faker::Address.full_address,
      contact_details: Faker::PhoneNumber.phone_number
    )
  end
  
  # Seed data for users
  50.times do
    User.create(
      username: Faker::Internet.username,
      email: Faker::Internet.email,
      password: Faker::Internet.password,
      role: User.roles.keys.sample,
      course: Faker::Educator.course_name,
      gender: Faker::Gender.binary_type,
      school_id: School.all.sample.id
    )
  end
  
  # Seed data for units
  30.times do
    Unit.create(
      name: Faker::Educator.course_name,
      school_id: School.all.sample.id,
      user_id: User.all.sample.id
    )
  end
  
  # Seed data for resources
  50.times do
    Resource.create(
      name: Faker::Educator.course_name,
      file_url: Faker::Internet.url,
      unit_id: Unit.all.sample.id
    )
  end
  
  # Seed data for attendances
  100.times do
    Attendance.create(
      date: Faker::Date.between(from: 1.month.ago, to: Date.today),
      present: Faker::Boolean.boolean,
      user_id: User.all.sample.id
    )
  end
  
  # Seed data for chats
  200.times do
    Chat.create(
      message: Faker::Lorem.sentence(word_count: 10),
      user_id: User.all.sample.id,
      unit_id: Unit.all.sample.id
    )
  end
  
  # Seed data for exams
  50.times do
    Exam.create(
      duration: Faker::Number.between(from: 30, to: 120),
      unit_id: Unit.all.sample.id,
      user_id: User.all.sample.id
    )
  end
  
  # Seed data for libraries
  200.times do
    Library.create(
      user_id: User.all.sample.id,
      resource_id: Resource.all.sample.id
    )
  end
  
  # Seed data for video_conferences
  30.times do
    VideoConference.create(
      meeting_url: Faker::Internet.url,
      meeting_name: Faker::Lorem.word,
      unit_id: Unit.all.sample.id,
      user_id: User.all.sample.id
    )
  end
  