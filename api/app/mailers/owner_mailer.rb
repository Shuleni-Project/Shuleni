class OwnerMailer < ApplicationMailer


    def teacher_email(teacher, owner)
        @owner = owner
        @teacher = teacher
        mail to: teacher.email, subject: "Hired"
    end
    def student_email(student, owner)
        @owner = owner
        @student = student
        mail to: student.email, subject: "Invited"
    end

end
