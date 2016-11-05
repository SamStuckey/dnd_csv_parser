class AddNotNullToSongsTableTitle < ActiveRecord::Migration
  def change
    change_column_null :songs, :title, false
  end
end
