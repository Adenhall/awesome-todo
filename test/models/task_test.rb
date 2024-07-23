require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  test 'list_incomplete should return incomplete tasks' do
    assert_nil Task.incomplete.first.completed_at
  end
end
