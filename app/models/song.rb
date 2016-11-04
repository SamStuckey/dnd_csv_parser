class Song < ActiveRecord::Base
  include SharedValidations

  validates :title, presence: true, length: { minimum: 3 }, uniqueness: true
  validate :input_quality

  # this will only work if i make sure each tag is sent back as a hash.  An array of 'tag' hashes 
  accepts_nested_attribues_for :tags

  has_many :songtags
  has_many :tags, through: :songtags
  # validates_presence_of :tags

  private
  def input_quality
    unless appropriate_characters_only?(title)
      errors.add(:title, 'is not a vaild description')
    end
  end
end
