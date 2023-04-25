# require "test_helper"

# class UserCoursesControllerTest < ActionDispatch::IntegrationTest
#   setup do
#     @user_course = user_courses(:one)
#   end

#   test "should get index" do
#     get user_courses_url, as: :json
#     assert_response :success
#   end

#   test "should create user_course" do
#     assert_difference("UserCourse.count") do
#       post user_courses_url, params: { user_course: {  } }, as: :json
#     end

#     assert_response :created
#   end

#   test "should show user_course" do
#     get user_course_url(@user_course), as: :json
#     assert_response :success
#   end

#   test "should update user_course" do
#     patch user_course_url(@user_course), params: { user_course: {  } }, as: :json
#     assert_response :success
#   end

#   test "should destroy user_course" do
#     assert_difference("UserCourse.count", -1) do
#       delete user_course_url(@user_course), as: :json
#     end

#     assert_response :no_content
#   end
# end
