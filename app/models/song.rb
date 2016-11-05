class Song < ActiveRecord::Base
  include SharedValidations

  validates :title, presence: true, length: { minimum: 3 }, uniqueness: true
  validate :input_quality

  has_many :songtags, inverse_of: :song, dependent: :destroy
  has_many :tags, through: :songtags
  validates_presence_of :tags
  accepts_nested_attributes_for :tags, allow_destroy: true

  private
  def input_quality
    unless appropriate_characters_only?(title)
      errors.add(:title, 'is not a vaild title')
    end
  end
end
