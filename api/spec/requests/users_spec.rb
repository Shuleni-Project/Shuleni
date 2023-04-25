<<<<<<< HEAD
require 'rails_helper'

RSpec.describe "Users", type: :request do

  describe 'POST /signup' do
    context 'with matching password confirmation' do
      let!(:user_params) { { name: 'sam', email: 'sam@codecity.com', password: 'sam123', password_confirmation: 'sam123' } }
      
      it 'creates a new user' do
        expect { post '/signup', params: user_params }.to change(User, :count).by(1)
      end

      it 'saves the password as password_digest to allow authentication' do
        post '/signup', params: user_params

        expect(User.last.authenticate(user_params[:password])).to eq(User.last)
      end
      
      it 'saves the user id in the session' do
        post '/signup', params: user_params

        expect(session[:user_id]).to eq(User.last.id)
      end
      
      it 'returns the user as JSON' do
        post '/signup', params: user_params

        expect(response.body).to include_json({
          id: User.last.id,
          username: User.last.username
        })
      end

    end

    context 'with no matching password confirmation' do
      let!(:user_params) { { name: 'sam', password: 'sam123', password_confirmation: 'sam1234' } }

      it 'does not save the user' do
        expect { post '/signup' }.not_to change(User, :count)
      end

      it 'returns a 422 unprocessable entity response' do
        post '/signup', params: user_params

        expect(response).to have_http_status(:unprocessable_entity)
      end
      
    end
  end

  describe 'GET /me' do
    let!(:user1) { User.create(username: 'sam', password: 'sam123') }
    let!(:user2) { User.create(username: 'joy', password: 'joy123') }

    it 'returns the first user when the first user is logged in' do
      post '/login', params: { username: user1.username, password: user1.password }
      get '/me'

      expect(response.body).to include_json({ 
        id: user1.id, username: user1.username
      })
    end

    it 'returns the second user when the second user is logged in' do
      post '/login', params: { username: user2.username, password: user2.password }
      get '/me'

      expect(response.body).to include_json({ 
        id: user2.id, username: user2.username
      })
    end

    it 'returns a 401 unauthorized response when no user is logged in' do
      get '/me'

      expect(response).to have_http_status(:unauthorized)
    end
  end
  
end
=======
# require 'swagger_helper'

# RSpec.describe 'users', type: :request do

#   path '/users' do

#     get('list users') do
#       response(200, 'successful') do
        
#         after do |example|
#           example.metadata[:response][:content] = {
#             'application/json' => {
#               example: JSON.parse(response.body, symbolize_names: true)
#             }
#           }
#         end
#         run_test!
#       end
#     end
    
#     post('create user') do
#       response(200, 'successful') do
#         consumes 'application/json'        
#         parameter name: :user, in: :body, schema: {          
#         type: :object,          
#         properties: {    
#           username: { type: :string },            
#           email: { type: :string },         
#           password: { type: :string },          
#           role: { type: :integer },          
#           course: { type: :string },          
#           gender: { type: :string },          
#           school_id: { type: :bigint }          
#         },          
#         required: %w[username email password role course gender school_id]  
#         }

#         after do |example|
#           example.metadata[:response][:content] = {
#             'application/json' => {
#               example: JSON.parse(response.body, symbolize_names: true)
#             }
#           }
#         end
#         run_test!
#       end
#     end
#   end

#   path '/users/{id}' do
#     # You'll want to customize the parameter types...
#     parameter name: 'id', in: :path, type: :string, description: 'id'

#     get('show user') do
#       response(200, 'successful') do
#         let(:id) { '123' }

#         after do |example|
#           example.metadata[:response][:content] = {
#             'application/json' => {
#               example: JSON.parse(response.body, symbolize_names: true)
#             }
#           }
#         end
#         run_test!
#       end
#     end

#     delete('delete user') do
#       response(200, 'successful') do
#         let(:id) { '123' }

#         after do |example|
#           example.metadata[:response][:content] = {
#             'application/json' => {
#               example: JSON.parse(response.body, symbolize_names: true)
#             }
#           }
#         end
#         run_test!
#       end
#     end
#   end
# end
>>>>>>> ce592490ae32f09b17b64ad28d36d39d1e564051
