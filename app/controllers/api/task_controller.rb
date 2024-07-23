module Api
  class TaskController < Api::BaseController
    def list_incomplete
      tasks = Task.incomplete

      render json: tasks, status: :ok
    end
  end
end
