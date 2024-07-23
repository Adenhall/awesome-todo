import clsx from "clsx";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  color?: "red" | "yellow" | "green";
}

const Tag = ({ children, className, color, ...props }: Props) => {
  return (
    <div
      className={clsx(
        "px-4 py-1 bg-gray-200 rounded-full flex whitespace-nowrap items-center justify-center",
        className,
        {
          "text-red-500 bg-red-100": color === "red",
          "text-yellow-500 bg-yellow-100": color === "yellow",
          "text-green-500 bg-green-100": color === "green",
        },
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Tag;
