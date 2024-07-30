import { useState } from "react";
import { getIncompleteTasks, Task as ApiTask } from "../services/tasks";

import Task from "../components/Task";
import { LoaderFunction, useLoaderData, useNavigate } from "react-router-dom";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

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
      <DragDropContext onDragEnd={() => console.log("dropped")}>
        <Droppable droppableId="tasks-drop">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="p-6"
            >
              {tasks.map(({ id, title, subtitle, due_date, priority }, idx) => (
                <Draggable draggableId={id} index={idx}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Task
                        key={id}
                        id={id}
                        title={title}
                        subtitle={subtitle}
                        priority={priority}
                        dueDate={due_date}
                        onChecked={(id) =>
                          setTasks(tasks.filter((task) => task.id !== id))}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Home;
