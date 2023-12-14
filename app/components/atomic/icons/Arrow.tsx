import React from "react";
import { iconModel } from "./iconModel";
import clsx from "clsx";

export const Arrow = ({ className, onClick }: iconModel) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(`cursor-pointer`, className)}
    >
      <g id="Icons/Varios/Arrow-Left">
        <path
          id="Vector"
          d="M15 6L9 12L15 18"
          stroke="#525256"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
