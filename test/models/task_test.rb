require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  test 'list_incomplete should return incomplete tasks' do
    assert_not Task.incomplete.first.completed?
  end
end
