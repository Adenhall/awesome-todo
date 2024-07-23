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

    def create
      created = Task.create!(
        title: params[:title],
        subtitle: params[:subtitle],
        priority: params[:priority],
        due_date: params[:due_date]
      )

      { json: created, status: :created }
    end
  end
end
