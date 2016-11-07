require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'song_seeds.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  tags = row['tags'].split(',').map { |tag| {description: tag.downcase} }
  title = row['song']
  s = Song.create(title: title, tags_attributes: tags)
  puts "#{s.title} saved with #{tags.length} tags"
end

puts "There are now #{Song.count} rows in the transactions table"
