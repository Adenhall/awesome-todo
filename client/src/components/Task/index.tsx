import { format as formatDate } from "date-fns";
import Tag from "./Tag";

type Props = {
  title: string;
  subtitle?: string;
  priority: "high" | "medium" | "low";
  dueDate?: string;
};

const priorityColors = {
  "high": "red",
  "medium": "yellow",
  "low": "green",
} as const;

const Task = ({ title, subtitle, priority, dueDate }: Props) => {
  return (
    <div className="flex items-start p-4 gap-6">
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
        {dueDate && <Tag className="text-xs font-semibold">{formatDate(dueDate, "iii, dd LLL yyyy, p")}</Tag>}
      </div>
    </div>
  );
};

export default Task;
