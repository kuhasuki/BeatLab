class AddFileToArtistImage < ActiveRecord::Migration
  def self.up
    add_attachment :artist_images, :file
  end

  def self.down
    remove_attachment :artist_images, :file
  end
end
