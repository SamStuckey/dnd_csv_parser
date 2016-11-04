class Song < ActiveRecord::Base
  has_many_belongs_to_many :tags
  validates_presence_of :tags
end
