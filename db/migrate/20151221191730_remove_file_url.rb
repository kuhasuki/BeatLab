class RemoveFileUrl < ActiveRecord::Migration
  def change
  	remove_column :tracks, :file_url
  end
end
