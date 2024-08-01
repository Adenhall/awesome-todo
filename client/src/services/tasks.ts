import axios from "axios";

export type Task = {
  id: string;
  title: string;
  subtitle?: string;
  due_date?: string;
  priority: "low" | "medium" | "high";
};

export const getIncompleteTasks = async () => {
  return axios.get<Task[]>("/api/tasks/incomplete");
};

export const markTaskAsCompleted = async (id: string) => {
  return axios.post("/api/tasks/completed", { id });
};

export const createTask = async (data: Omit<Task, "id">) => {
  return axios.post<Task>("/api/tasks/new", data);
};

export const reorderTasks = async (taskIds: string[]) => {
  return axios.post("/api/tasks/reorder", { task_ids: taskIds });
}
