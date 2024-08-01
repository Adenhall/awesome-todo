class Task < ApplicationRecord
  before_save :set_default_position

  enum priority: { low: 0, medium: 1, high: 2 }

  scope :incomplete, -> { where(completed_at: nil) }
  scope :ordered_by_position, -> { order(:position) }

  validates :title, presence: true
  validates :priority, presence: true

  private

  def set_default_position
    self.position = (Task.maximum(:position) || 0) + 1
  end
end
