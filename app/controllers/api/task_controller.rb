module Api
  class TaskController < Api::BaseController
    def list_incomplete
      tasks = Task.incomplete.ordered_by_position

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

    def reorder
      ActiveRecord::Base.transaction do
        params[:task_ids].each_with_index do |id, index|
          Task.find(id).update(position: index)
        end
      end

      head :ok
    end
  end
end
