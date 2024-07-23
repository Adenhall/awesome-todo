import { useEffect, useState } from "react";
import { getIncompleteTasks, Task } from "./services/tasks";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    (async () => {
      const res = await getIncompleteTasks();

      setTasks(res.data);
    })();
  }, []);
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      {tasks.map((task) => <div>{task.title}</div>)}
    </div>
  );
}

export default App;
