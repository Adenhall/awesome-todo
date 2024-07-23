import { format as formatDate } from "date-fns";
import Tag from "./Tag";
import { ChangeEventHandler } from "react";
import { markTaskAsCompleted } from "../../services/tasks";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  priority: "high" | "medium" | "low";
  dueDate?: string;
  onChecked?: (id: string) => void;
};

const priorityColors = {
  "high": "red",
  "medium": "yellow",
  "low": "green",
} as const;

const Task = ({ id, title, subtitle, priority, dueDate, onChecked }: Props) => {
  const handleCheck: ChangeEventHandler<HTMLInputElement> = async (e) => {
    if (e.currentTarget.checked) {
      await markTaskAsCompleted(id);

      onChecked && onChecked(id);
    }
  };
  return (
    <div className="flex items-center p-4 gap-6">
      <input type="checkbox" onChange={handleCheck} />
      <div className="flex items-start gap-6">
        <div className="w-96 text-balance">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-lg text-gray-500">{subtitle}</p>
        </div>
        <div className="flex gap-4 mt-0.5">
          <Tag
            className="uppercase text-xs font-bold"
            color={priorityColors[priority]}
          >
            {priority} priority
          </Tag>
          {dueDate && (
            <Tag className="text-xs font-semibold">
              {formatDate(dueDate, "iii, dd LLL yyyy, p")}
            </Tag>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
