import React, { ReactNode } from "react";

interface TooltipProps {
  content: string | ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  children: ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = "top",
  children,
}) => {
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-1",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-1",
    left: "right-full top-1/2 -translate-y-1/2 mr-1",
    right: "left-full top-1/2 -translate-y-1/2 ml-1",
  };

  return (
    <div className="relative inline-block group">
      {children}
      <div
        className={`absolute z-10 hidden group-hover:block group-focus:block px-2 py-1 text-sm text-white bg-gray-800 rounded shadow transition-all duration-200 whitespace-nowrap ${positionClasses[position]}`}
      >
        {content}
      </div>
    </div>
  );
};
