import { ActionFunction, Form, redirect } from "react-router-dom";
import { createTask, Task } from "../services/tasks";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title")!.valueOf() as string;
  const subtitle = formData.get("subtitle")?.valueOf() as string;
  const dueDate = formData.get("dueDate")?.valueOf() as string;
  const priority = formData.get("priority")!.valueOf() as Task["priority"];

  const payload = {
    title,
    subtitle,
    due_date: dueDate,
    priority,
  };

  await createTask(payload);

  return redirect("/");
};

const Create = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center p-6">
      <Form
        method="post"
        action="/create"
        className="w-1/2 p-6 border-2 border-slate-300 flex flex-col gap-2"
      >
        <label htmlFor="title">Title*</label>
        <input
          name="title"
          id="title"
          className="p-3 rounded-lg border-2"
          placeholder="Required"
          required
        />

        <label htmlFor="subtitle">Subtitle</label>
        <input
          name="subtitle"
          id="subtitle"
          className="p-3 rounded-lg border-2"
          placeholder="Optional"
        />

        <label htmlFor="dueDate">Due Date</label>
        <input
          name="dueDate"
          id="dueDate"
          className="p-3 rounded-lg border-2"
          placeholder="Optional"
          type="date"
        />

        <label htmlFor="priority">Priority*</label>
        <select
          className="p-3 rounded-lg border-2"
          name="priority"
          id="priority"
          required
        >
          <option value="">--Please choose an option--</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <button type="submit">Create</button>
      </Form>
    </div>
  );
};

export default Create;
