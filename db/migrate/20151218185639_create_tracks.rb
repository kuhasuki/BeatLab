class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
    	t.string :title, null: false
    	t.text :description, null: false
    	t.string :genre, null: false
    	t.integer :user_id, null: false
    	t.string :file_url, null: false
    	t.integer :play_count, null: false, default: 0
      t.timestamps null: false
    end
    add_index(:tracks, :user_id)
  end
end
