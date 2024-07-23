import { useEffect, useState } from "react";
import { getIncompleteTasks, Task as ApiTask } from "./services/tasks";

import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState<ApiTask[]>([]);
  useEffect(() => {
    (async () => {
      const res = await getIncompleteTasks();

      setTasks(res.data);
    })();
  }, []);
  return (
    <div className="w-screen h-screen flex flex-col p-6 divide-y">
      <h1 className="text-3xl font-bold p-6">Tasks</h1>
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
}

export default App;
