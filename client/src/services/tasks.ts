import axios from "axios";

export type Task = {
  id: string;
  title: string;
  subtitle?: string;
  priority: "low" | "medium" | "high";
};

export const getIncompleteTasks = async () => {
  return axios.get<Task[]>("/api/tasks/incomplete");
};
