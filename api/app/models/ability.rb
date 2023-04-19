# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new 
    if user.role == "admin"
      can :manage, :all
    elsif user.role == "teacher"
      # the teacher can manage the units, exams and libraries 
      can :manage, Unit, user_id: user.id
      can :manage, Exam, user_id: user.id
      can :manage, Library, user_id: user.id
      can :manage, Resource, user_id: user.id
      # can :manage, Resource, user_id: user.id
      can :manage, VideoConference, user_id: user.id
      can :manage, Attendance
    elsif user.role == "student"
      can :read, Attendance, user_id: user.id
      can :read, Unit
      can :read, Exam
      can :read, Library
      can :read, Resource
      # can :read, Resource
      can :read, VideoConference
      # can :read, Attendance
    end
  end
end
