import React from "react";

interface SpinnerProps {
  size?: number; // in pixels
  color?: string; // Tailwind color class
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 24,
  color = "border-white",
}) => {
  return (
    <div
      className={`inline-block animate-spin rounded-full border-2 border-t-transparent ${color}`}
      style={{ width: size, height: size }}
    />
  );
};
