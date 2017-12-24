class CreateTrackPlays < ActiveRecord::Migration[5.1]
  def change
    create_table :track_plays, id: :uuid do |t|
      t.belongs_to :track, foreign_key: true, type: :uuid
      t.belongs_to :user, foreign_key: true, type: :uuid
    end
  end
end
