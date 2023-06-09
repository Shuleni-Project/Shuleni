require 'jwt'

class JsonWebToken
  # Set the secret key to a random string. This should be kept secret in production.
  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

  def self.encode(payload)
    JWT.encode(payload, SECRET_KEY)
  end

  def self.decode(token)
    decoded = JWT.decode(token, SECRET_KEY)[0]
    HashWithIndifferentAccess.new decoded
  end
end
