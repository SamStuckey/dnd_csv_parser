@songs.each do |song|
  json.set! song.id do
    json.partial! 'song', song: song
  end
end

json.page @page.to_i
json.page_count @count if @count
