class TrackPlay < ApplicationRecord
  belongs_to :track
  counter_culture :track
  belongs_to :user, optional: true
end
