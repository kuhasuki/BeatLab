class Track < ActiveRecord::Base
	validates :title, :description, :genre, :file, :user_id, :play_count, presence: true
	belongs_to :user

	has_attached_file :file,
                    :storage => :s3,
                    :s3_credentials => Proc.new{|a| a.instance.s3_credentials },
                    :host_name => 's3-us-west-2.amazonaws.com'

  def s3_credentials
    {:bucket => "trackwaveaudio", :access_key_id => "AKIAJDDEBE5WYOO3WYAQ", :secret_access_key => "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"}
  end

	validates_attachment :file, content_type: { content_type: ["audio/mp3"] }

	def cdn 
		"http://s3-us-west-2.amazonaws.com/trackwaveaudio" + self.file.path
	end

end
