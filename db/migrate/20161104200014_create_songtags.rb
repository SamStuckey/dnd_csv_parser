class CreateSongtags < ActiveRecord::Migration
  def change
    create_table :songtags do |t|
      t.integer :song_id, null: false
      t.integer :tag_id, null: false

      t.timestamps null: false
    end
  end
end
