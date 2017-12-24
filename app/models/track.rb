class Track < ApplicationRecord
  has_many :track_plays
  belongs_to :user, optional: true
  validates :name, presence: true
end
