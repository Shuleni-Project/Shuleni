# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new 
    if user.role == "admin"
      can :manage, :all
    elsif user.role == "teacher"
      # the teacher can manage the units, exams and libraries 
      can :manage, Course, user_id: user.id
      can :manage, Unit
      can :manage, Exam, user_id: user.id
      can :manage, Library, user_id: user.id
      can :manage, Resource, user_id: user.id
      # can :manage, Resource, user_id: user.id
      can :manage, VideoConference, user_id: user.id
      can :manage, Attendance
      can :manage, Assignment, user_id: user.id
      can :manage, Content
      can :read, StudentAssignment, user_id: user.id
      can :update, StudentAssignment, user_id: user.id
      
    elsif user.role == "student"
      puts user
      can :read, Attendance, user_id: user.id
      can :read, Unit, user_id: user.id
      can :read, Exam, user_id: user.id
      can :read, Library, user_id: user.id
      can :read, Resource, user_id: user.id
      can :read, Course, user_id: user.id
      can :read, Content, user_id: user.id
      # can :read, Resource
      can :read, VideoConference, user_id: user.id
      # can :read, Attendance
      can :create, StudentAssignment
    end
  end
end
