require 'rest-client'
require 'json'

class User < ActiveRecord::Base
  attr_accessible :name, :email, :admin, :token

  validates :email, uniqueness: true

  def self.authenticate_with_persona(assertion, audience)
    server = 'https://verifier.login.persona.org/verify'
    assertion_params = {
      assertion: assertion,
      audience: audience
    }
    request = RestClient::Resource.new(server, verify_ssl: true).post(assertion_params)
    response = JSON.parse(request)

    if response['status'] == 'okay'
      response
    else
      { status: 'error' }.to_json
    end
  end

  def self.authenticate_token token
    self.find_by(token: token)
  end

  def generate_token
    token = SecureRandom.hex
    self.update token: token
  end
end
