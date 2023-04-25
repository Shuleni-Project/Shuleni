require 'rails_helper'

RSpec.describe User, type: :model do
  it 'has a password field' do
    expect(User.new).to respond_to(:password)
  end

  it 'has a username field' do
    expect(User.new).to respond_to(:username)
  end

  it 'has a password confirmation field' do
    expect(User.new).to respond_to(:password_confirmation)
  end

  it 'is valid if password and password_confirmation match' do
    user = User.new
    user.password = 'lee'
    user.password_confirmation = 'lee'
    expect(user.valid?).to be(true)
  end

  it 'is valid if password is set and password_confirmation is nil' do
     user = User.new
     user.password = 'lee'
     expect(user.valid?).to be(true)
  end

  it "is invalid if password and password_confirmation are both non-nil and don't match" do
    user = User.new
    user.password = 'lee'
    user.password_confirmation = 'leew'
    expect(user.valid?).to be(false)
  end

  describe 'authenticate' do
    it 'returns the user if credentials match' do
      user = User.new
      user.password = 'lee'
      expect(user.authenticate('lee')).to eq(user)
    end

    it "returns false if credentials don't match" do
      user = User.new
      user.password = 'lee'
      expect(user.authenticate('leew')).to be(false)
    end
  end
end