class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :track_plays
  has_many :tracks

  has_many :active_relationships, class_name: "Relationship",
    foreign_key: "follower_id",
    dependent:   :destroy

  has_many :passive_relationships, class_name: "Relationship",
    foreign_key: "followed_id",
    dependent:   :destroy

  has_many :following, through: :active_relationships, source: :followed
  has_many :followers, through: :passive_relationships, source: :follower

  def follow(other_user)
    Relationship.create(
      followed: other_user,
      follower: self
    )
  end

  def unfollow(other_user)
    relationship = Relationship.find_by(
      followed: other_user,
      follower: self
    )
    relationship ? relationship.destroy : nil
  end

  def following?(other_user)
    following.include?(other_user)
  end

  def following_count
    following.count
  end

  def follower_count
    followers.count
  end
end
