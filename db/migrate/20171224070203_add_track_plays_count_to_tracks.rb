class AddTrackPlaysCountToTracks < ActiveRecord::Migration[5.1]
  def self.up
    add_column :tracks, :track_plays_count, :integer, null: false, default:  0
  end

  def self.down
    remove_column :tracks, :track_plays_count
  end
end
