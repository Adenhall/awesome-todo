class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks, id: :uuid do |t|
      t.string :title, null: false
      t.string :sub_title
      t.datetime :due_date
      t.integer :priority, default: 0, null: false
      t.boolean :completed, default: false, null: false

      t.timestamps
    end
  end
end
