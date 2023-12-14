import React from "react";
import { iconModel } from "./iconModel";
import clsx from "clsx";

export const SmallDot = ({
  className,
  onClick,
  color = "#9F9F9F",
}: iconModel) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3"
      height="4"
      viewBox="0 0 3 4"
      fill="none"
      className={clsx(className)}
    >
      <circle
        cx="1.5"
        cy="2"
        r="1.5"
        transform="rotate(-90 1.5 2)"
        fill={color}
      />
    </svg>
  );
};
