class Tag < ActiveRecord::Base
  validates :description, length: { minimum: 3 }, uniqueness: true
  validate :letters_and_numbers_only_in_description

  private
  def letters_and_numbers_only_in_description
    if description[/[a-zA-Z\d]*/] != description
      errors.add(:description, 'is not a vaild description')
    end
  end
end
