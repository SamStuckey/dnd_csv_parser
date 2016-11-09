json.extract! song, :id, :title, :tags

# json.tags :tags.map{|tag| tag.description} # NOTE this is an N + a billion query, to fix
