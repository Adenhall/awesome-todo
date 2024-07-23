class Task < ApplicationRecord
  enum priority: { low: 0, medium: 1, high: 2 }

  scope :incomplete, -> { where(completed_at: nil) }

  validates :title, presence: true
  validates :priority, presence: true
end
