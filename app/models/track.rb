class Track < ActiveRecord::Base
	validates :title, :description, :genre, :user_id, :file_url, :play_count, presence: true
	belongs_to :user
end
