import React from "react";
import { iconModel } from "./iconModel";
import clsx from "clsx";

export const Dashboard = ({
  color = "#191919",
  className,
  onClick,
}: iconModel) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(`cursor-pointer`, className)}
    >
      <g id="Icons/SideNav/Dashboard" clipPath="url(#clip0_341_121)">
        <path
          id="Vector"
          d="M13.3333 8V0H24V8H13.3333ZM0 13.3333V0H10.6667V13.3333H0ZM13.3333 24V10.6667H24V24H13.3333ZM0 24V16H10.6667V24H0Z"
          // fill="#191919"
        />
      </g>
      <defs>
        <clipPath id="clip0_341_121">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
