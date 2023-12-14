import React from "react";
import { iconModel } from "./iconModel";
import clsx from "clsx";

export const Game = ({ className, onClick }: iconModel) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      className={clsx(`cursor-pointer`, className)}
    >
      <g clipPath="url(#clip0_402_157)">
        <path
          d="M1.41699 8.16666L6.08366 12.8333M6.08366 8.16666L1.41699 12.8333M13.0837 8.16666H8.41699V12.8333H13.0837V8.16666ZM4.04199 1.16666L6.66699 5.83333H1.41699L4.04199 1.16666ZM10.7503 5.83333C11.3692 5.83333 11.9627 5.5875 12.4002 5.14991C12.8378 4.71233 13.0837 4.11884 13.0837 3.5C13.0837 2.88116 12.8378 2.28767 12.4002 1.85008C11.9627 1.4125 11.3692 1.16666 10.7503 1.16666C10.1315 1.16666 9.53799 1.4125 9.10041 1.85008C8.66282 2.28767 8.41699 2.88116 8.41699 3.5C8.41699 4.11884 8.66282 4.71233 9.10041 5.14991C9.53799 5.5875 10.1315 5.83333 10.7503 5.83333Z"
          stroke="#525256"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_402_157">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(0.25)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
