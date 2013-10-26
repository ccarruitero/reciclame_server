require 'rest-client'
require 'json'

class User < ActiveRecord::Base

  def self.authenticate_with_persona(assertion, audience)
    server = 'https://verifier.login.persona.org/verify'
    assertion_params = {
      assertion: assertion,
      audience: audience
    }
    request = RestClient::Resource.new(server, verify_ssl: true).post(assertion_params)
    response = JSON.parse(request)

    if response['status'] == 'okay'
      user = User.find_or_create_by_email(response['email']) 
      if found_user and found_user['email']
        puts 'Existing User'
      else
        puts 'Creating User'
        User.create(name: response['email'], email: response['email'])
      end

      return response
    else
      return { status: 'error' }.to_json
    end
  end
end
