import React from "react";
import { iconModel } from "./iconModel";
import clsx from "clsx";

export const Calendar = ({ className, onClick }: iconModel) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(`cursor-pointer`, className)}
    >
      <g id="Icons/Botones/Calendar">
        <path
          id="Vector"
          d="M20.5556 21.6H3.44444V8.4H20.5556M16.8889 0V2.4H7.11111V0H4.66667V2.4H3.44444C2.08778 2.4 1 3.468 1 4.8V21.6C1 22.2365 1.25754 22.847 1.71596 23.2971C2.17438 23.7471 2.79614 24 3.44444 24H20.5556C21.2039 24 21.8256 23.7471 22.284 23.2971C22.7425 22.847 23 22.2365 23 21.6V4.8C23 4.16348 22.7425 3.55303 22.284 3.10294C21.8256 2.65286 21.2039 2.4 20.5556 2.4H19.3333V0"
          fill="#525256"
        />
      </g>
    </svg>
  );
};
