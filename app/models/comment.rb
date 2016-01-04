class Comment < ActiveRecord::Base
	validates :body, :track_id, :user_id, presence: true
	belongs_to :user
	belongs_to :track
end
