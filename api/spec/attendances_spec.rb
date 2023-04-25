# require 'rails_helper'

# RSpec.describe AttendancesController, type: :controller do

#   describe "GET #index" do
#     let!(:attendance1) { create(:attendance) }
#     let!(:attendance2) { create(:attendance) }
#     let!(:student_attendance) { create(:attendance, user: student_user) }
#     let!(:student_user) { create(:user, role: 'student') }
#     let!(:teacher_user) { create(:user, role: 'teacher') }
    
#     context "when current user is a student" do
#       before { sign_in(student_user) }
      
#       it "returns the student's attendances" do
#         get :index
#         expect(assigns(:attendances)).to eq([student_attendance])
#       end
#     end
    
#     context "when current user is a teacher" do
#       before { sign_in(teacher_user) }
      
#       it "returns all attendances" do
#         get :index
#         expect(assigns(:attendances)).to match_array([attendance1, attendance2, student_attendance])
#       end
#     end
#   end
  
#   describe "GET #show" do
#     let!(:attendance) { create(:attendance) }
    
#     context "when user can read attendances" do
#       before { sign_in(user) }
      
#       context "when the user is a student" do
#         let(:user) { create(:user, role: 'student') }
        
#         it "returns the student's attendances" do
#           get :show, params: { id: user.id }
#           expect(assigns(:attendances)).to eq(user.attendances)
#         end
#       end
      
#       context "when the user is a teacher" do
#         let(:user) { create(:user, role: 'teacher') }
        
#         it "returns the attendance" do
#           get :show, params: { id: attendance.id }
#           expect(assigns(:attendances)).to eq(attendance)
#         end
#       end
#     end
    
#     context "when user cannot read attendances" do
#       before { sign_in(create(:user)) }
      
#       it "returns a 403 Forbidden response" do
#         get :show, params: { id: attendance.id }
#         expect(response).to have_http_status(:forbidden)
#       end
#     end
#   end
  
#   describe "POST #create" do
#     let(:user) { create(:user, role: 'teacher') }
#     let(:valid_params) { attributes_for(:attendance) }
    
#     context "when user can create attendances" do
#       before { sign_in(user) }
      
#       it "creates a new attendance" do
#         expect {
#           post :create, params: valid_params
#         }.to change(Attendance, :count).by(1)
#       end
      
#       it "returns the new attendance" do
#         post :create, params: valid_params
#         expect(assigns(:attendance)).to be_a(Attendance)
#         expect(assigns(:attendance)).to be_persisted
#       end
      
#       it "returns a 201 Created response" do
#         post :create, params: valid_params
#         expect(response).to have_http_status(:created)
#       end
#     end
    
#     context "when user cannot create attendances" do
#       before { sign_in(create(:user, role: 'student')) }
      
#       it "does not create a new attendance" do
#         expect {
#           post :create, params: valid_params
#         }.not_to change(Attendance, :count)
#       end
      
#       it "returns a 403 Forbidden response" do
#         post :create, params: valid_params
#         expect(response).to have_http_status(:forbidden)
#       end
#     end
#   end
  
#   describe "PATCH #update" do
#     let!(:attendance) { create(:attendance) }
#     let(:user) { create(:user, role: 'teacher') }
#     let(:valid_params) { { present: true } }
    
#     context "when user can update attendances" do
#       before { sign_in(user) }
      
#       it "updates the attendance" do
#         patch :update, params: { id: attendance.id, attendance: valid_params }
#         attendance.reload
#         expect(attendance.present).to eq(true)
#       end
      
#       it "returns the updated attendance" do
#         patch :update, params: { id: attendance.id, attendance: valid_params }
#         expect(assigns(:attendance)).to eq(attendance)
#       end
      
#       it "returns a 200 OK response" do
#         patch :update, params: { id: attendance.id, attendance: valid_params }
#         expect(response).to have_http_status(:ok)
#       end
#     end
    
#     context "when user cannot update attendances" do
#       before { sign_in(create(:user, role: 'student')) }
      
#       it "does not update the attendance" do
#         patch :update, params: { id: attendance.id, attendance: valid_params }
#         attendance.reload
#         expect(attendance.present).to eq(false)
#       end
      
#       it "returns a 403 Forbidden response" do
#         patch :update, params: { id: attendance.id, attendance: valid_params }
#         expect(response).to have_http_status(:forbidden)
#       end
#     end
#   end
  
#   describe "DELETE #destroy" do
#     let!(:attendance) { create(:attendance) }
    
#     context "when user can delete attendances" do
#       before { sign_in(create(:user, role: 'teacher')) }
      
#       it "destroys the attendance" do
#         expect {
#           delete :destroy, params: { id: attendance.id }
#         }.to change(Attendance, :count).by(-1)
#       end
      
#       it "returns a 204 No Content response" do
#         delete :destroy, params: { id: attendance.id }
#         expect(response).to have_http_status(:no_content)
#       end
#     end
    
#     context "when user cannot delete attendances" do
#       before { sign_in(create(:user, role: 'student')) }
      
#       it "does not destroy the attendance" do
#         expect {
#           delete :destroy, params: { id: attendance.id }
#         }.not_to change(Attendance, :count)
#       end
      
#       it "returns a 403 Forbidden response" do
#         delete :destroy, params: { id: attendance.id }
#         expect(response).to have_http_status(:forbidden)
#       end
#     end
#   end
# end
