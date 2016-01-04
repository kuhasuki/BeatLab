class Track < ActiveRecord::Base
	validates :title, :description, :genre, :file, :user_id, :play_count, presence: true
	belongs_to :user

	has_attached_file :file,
                    :storage => :s3,
                    :bucket => 'trackwaveaudio',
                    :host_name => 's3-us-west-2.amazonaws.com'

  def s3_credentials
    {:bucket => ENV["S3_BUCKET_NAME"],  :access_key_id => ENV["AWS_ACCESS_KEY_ID"], :secret_access_key => ENV["AWS_SECRET_ACCESS_KEY"]}
  end

	validates_attachment :file, content_type: { content_type: ["audio/mp3"] }

	def cdn 
		"http://s3-us-west-2.amazonaws.com/trackwaveaudio" + self.file.path
	end

end
