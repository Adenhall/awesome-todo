import { useState } from "react";
import { getIncompleteTasks, Task as ApiTask } from "../services/tasks";

import Task from "../components/Task";
import { LoaderFunction, useLoaderData, useNavigate } from "react-router-dom";

export const loader: LoaderFunction = async () => {
  return getIncompleteTasks();
};

const Home = () => {
  const { data } = useLoaderData() as { data: ApiTask[] };
  const [tasks, setTasks] = useState<ApiTask[]>(data);
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex flex-col p-6 divide-y">
      <div className="flex items-center gap-6">
        <h1 className="text-3xl font-bold p-6">Tasks</h1>
        <button onClick={() => navigate("/create")}>Create new todo</button>
      </div>
      <div className="p-6">
        {tasks.map(({ id, title, subtitle, due_date, priority }) => (
          <Task
            key={id}
            id={id}
            title={title}
            subtitle={subtitle}
            priority={priority}
            dueDate={due_date}
            onChecked={(id) => setTasks(tasks.filter((task) => task.id !== id))}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
