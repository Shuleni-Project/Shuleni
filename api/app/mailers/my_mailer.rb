class MyMailer < ApplicationMailer
    def welcome_email(user, pass)
      @pass = pass
      @user = user
      mail(to: @user.email, subject: "Welcome to #{@user.school.name}")
    end
  end