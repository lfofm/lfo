class AddCoverToTracks < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :cover, :string
  end
end
