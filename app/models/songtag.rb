class Songtag < ActiveRecord::Base
  belongs_to :tag
  belongs_to :song

  # validates_presence_of :tag, :song
end
