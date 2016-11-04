class Tag < ActiveRecord::Base
  include SharedValidations

  validates :description, length: { minimum: 3 }, uniqueness: true
  validate :input_quality

  has_many :songtags
  has_many :songs, through: :songtags

  private
  def input_quality
    unless appropriate_characters_only?(description)
      errors.add(:description, 'is not a vaild description')
    end
  end
end
