import { useState } from "react";

import { LoaderFunction, useLoaderData, useNavigate } from "react-router-dom";
import { DragDropContext, Draggable, Droppable, OnDragEndResponder } from "@hello-pangea/dnd";

import { getIncompleteTasks, reorderTasks, Task as ApiTask } from "../services/tasks";
import Task from "../components/Task";

export const loader: LoaderFunction = async () => {
  return getIncompleteTasks();
};

const Home = () => {
  const { data } = useLoaderData() as { data: ApiTask[] };
  const [tasks, setTasks] = useState<ApiTask[]>(data);
  const navigate = useNavigate();

  const handleDrop: OnDragEndResponder = (result) => {
    const { destination, source } = result
    if (!destination) return;
    
    const reorderedTasks = Array.from(tasks);
    reorderedTasks.splice(destination.index, 0, reorderedTasks.splice(source.index, 1)[0]);
    
    setTasks(reorderedTasks)

    reorderTasks(reorderedTasks.map(({ id }) => id));
  }

  return (
    <div className="w-screen h-screen flex flex-col p-6 divide-y">
      <div className="flex items-center gap-6">
        <h1 className="text-3xl font-bold p-6">Tasks</h1>
        <button onClick={() => navigate("/create")}>Create new todo</button>
      </div>
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="tasks-drop">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="p-6"
            >
              {tasks.map(({ id, title, subtitle, due_date, priority }, idx) => (
                <Draggable key={id} draggableId={id} index={idx}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Task
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
