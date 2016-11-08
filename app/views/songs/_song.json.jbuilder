json.extract! song, :id, :title
json.tags song.tags.map{|tag| tag.description}
