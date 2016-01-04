class Track < ActiveRecord::Base
	validates :title, :description, :genre, :file, :user_id, :play_count, presence: true
	belongs_to :user

	has_attached_file :file,
                    :storage => :s3,
                    :s3_credentials => Proc.new{|a| a.instance.s3_credentials },
                    :host_name => 's3-us-west-2.amazonaws.com'

  def s3_credentials
    {:bucket => "trackwaveaudio", :access_key_id => "AKIAIIHC6XKKJ44UMXZA", :secret_access_key => "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"}
  end

	validates_attachment :file, content_type: { content_type: ["audio/mp3"] }

	def cdn 
		"http://s3-us-west-2.amazonaws.com/trackwaveaudio" + self.file.path
	end

end
