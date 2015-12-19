require 'base64'
require 'openssl'
require 'digest/sha1'

class Api::TracksController < ApplicationController

	def upload

	end

	def signature

		policy_document = {"expiration": "2019-01-01T00:00:00Z",
  		"conditions": [ 
    		{"bucket": "s3-bucket"}, 
    		["starts-with", "$key", "uploads/"],
    		{"acl": "private"},
    		{"success_action_redirect": "http://localhost/"},
   			["starts-with", "$Content-Type", ""],
    		["content-length-range", 0, 1048576]
  		]
		}.to_json

		aws_secret_key = '2PpOlAe9gtl7+2555rnijyr6pX2VzQEeiMUm+n7M'

		policy = Base64.encode64(policy_document).gsub("\n","")
		
		signature = Base64.encode64(
    	OpenSSL::HMAC.digest(
        OpenSSL::Digest::Digest.new('sha1'), 
        aws_secret_key, policy)
    	).gsub("\n","")

		secrets = {"signature": signature, "policy": policy }

		render json: secrets

	end

	def index

	end

	def show

	end

end
