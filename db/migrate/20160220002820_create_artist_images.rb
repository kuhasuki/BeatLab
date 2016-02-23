class CreateArtistImages < ActiveRecord::Migration
  def change
  	create_table :artist_images do |t|
    	t.text :alt
    	t.integer :user_id, null: false
      t.timestamps null: false
    end
    add_index(:artist_images, :user_id)
  end
end
