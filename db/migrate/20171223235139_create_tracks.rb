class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks, id: :uuid do |t|
      t.text :name
      t.text :description
      t.string :asset_url
      t.belongs_to :user, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
