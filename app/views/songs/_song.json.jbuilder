json.extract! song, :id, :title
json.tags song.tags.map{|tag| tag.description} # NOTE this is an N + a billion query, to fix
