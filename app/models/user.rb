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
      response
    else
      { status: 'error' }.to_json
    end
  end
end
