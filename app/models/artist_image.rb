class ArtistImage < ActiveRecord::Base
	validates :file, :user_id, presence: true
	belongs_to :user

	has_attached_file :file,
                    :storage => :s3,
                    :bucket => 'trackwaveaudio',
                    :host_name => 's3-us-west-2.amazonaws.com'

  def s3_credentials
    {:bucket => ENV["S3_BUCKET_NAME"],  :access_key_id => ENV["AWS_ACCESS_KEY_ID"], :secret_access_key => ENV["AWS_SECRET_ACCESS_KEY"]}
  end

	validates_attachment :file, content_type: { content_type: ["image/jpeg", "image/gif", "image/png"] }

	def cdn 
		"url(http://s3-us-west-2.amazonaws.com/trackwaveaudio" + self.file.path + ")"
	end
	
end
