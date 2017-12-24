task track_plays_counter: :environment do
  Track.reset_column_information
  Track.pluck(:id).each do |id|
    Track.reset_counters id, :track_plays
  end
end
