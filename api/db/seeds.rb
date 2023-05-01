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
      description: Faker::Lorem.sentence,
      body: Faker::Lorem.sentence,
      address: Faker::Address.full_address,
      contact_details: Faker::PhoneNumber.phone_number
    )
  end
  
  # Seed data for users
  50.times do
    User.create(
      username: Faker::Internet.username,
      email: Faker::Internet.email,
      password: "password",
      role: User.roles.keys.sample,
      course: Faker::Educator.course_name,
      gender: Faker::Gender.binary_type,
      school_id: School.all.sample.id
    )
  end

  User.create(username: 'boomin', email:'metroboomin@gmail.com', password: "password",
  role: 0, course: 'Business', gender: 'Male', school_id: 1);
User.create(username: 'metro', email:'metroooo@gmail.com', password: "password",
      role: 1, course: 'Architecture', gender: 'Male', school_id: 1);
User.create(username: 'Ice Spice', email:'eyespice@gmail.com', password: "password",
          role: 2, course: 'Physics', gender: 'Female', school_id: 1);

  
  # Seed data for units
  100.times do
    Unit.create(
      name: Faker::Educator.course_name,
      description: Faker::Lorem.sentence,
      body: Faker::Lorem.sentence,
      school_id: School.all.sample.id,
      #user_id: rand(0..50)
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
        name: Faker::Educator.course_name,
        description: Faker::Lorem.sentence,
        body: Faker::Lorem.sentence,
      duration: Faker::Number.between(from: 30, to: 120),
      unit_id: Unit.all.sample.id,
      #user_id: User.all.sample.id
    )
  end

  50.times do
    Course.create(
      lesson: Faker::Educator.course_name,
      body: Faker::Lorem.sentence,
      description: Faker::Lorem.sentence,
      name: Faker::Educator.subject,
      unit_id: Unit.all.sample.id,
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

  50.times do
    Assignment.create(
      body: Faker::Lorem.sentence,
      description: Faker::Lorem.sentence,
      name: Faker::Educator.subject,
      course_id: Course.all.sample.id,
      due_date: Faker::Date.between(from: 1.month.ago, to: Date.today)
    )
  end

  200.times do
    Content.create(
      body: Faker::Lorem.sentence,
      description: Faker::Lorem.sentence,
      name: Faker::Educator.subject,
      course_id: Course.all.sample.id
    )
  end

  50.times do
    StudentAssignment.create(
      body: Faker::Lorem.sentence,
      description: Faker::Lorem.sentence,
      name: Faker::Educator.subject,
      user_id: User.all.sample.id,
      assignment_id: Assignment.all.sample.id,
      status: ['Submitted', 'Correct', 'Incorrect', nil].sample
    )
  end

  20.times do
    UserUnit.create(
      user_id: User.where(role: "student").sample.id,
      unit_id: Unit.all.sample.id
    )
  end

  50.times do
    UserExam.create(
      body: Faker::Lorem.sentence,
      description: Faker::Lorem.sentence,
      name: Faker::Educator.subject,
      user_id: User.all.sample.id,
      exam_id: Exam.all.sample.id,
      score: rand(1..100)
    )
  end
  