module Api
  class TaskController < Api::BaseController
    def list_incomplete
      tasks = Task.incomplete

      render json: tasks, status: :ok
    end

    def mark_complete
      Task.find(params[:id]).update(completed_at: Time.now)
      render json: {}, status: :ok
    end
  end
end
