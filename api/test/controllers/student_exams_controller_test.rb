require "test_helper"

class StudentExamsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @student_exam = student_exams(:one)
  end

  test "should get index" do
    get student_exams_url, as: :json
    assert_response :success
  end

  test "should create student_exam" do
    assert_difference("StudentExam.count") do
      post student_exams_url, params: { student_exam: { body: @student_exam.body, description: @student_exam.description, exam_id: @student_exam.exam_id, title: @student_exam.title, user_id: @student_exam.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show student_exam" do
    get student_exam_url(@student_exam), as: :json
    assert_response :success
  end

  test "should update student_exam" do
    patch student_exam_url(@student_exam), params: { student_exam: { body: @student_exam.body, description: @student_exam.description, exam_id: @student_exam.exam_id, title: @student_exam.title, user_id: @student_exam.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy student_exam" do
    assert_difference("StudentExam.count", -1) do
      delete student_exam_url(@student_exam), as: :json
    end

    assert_response :no_content
  end
end
