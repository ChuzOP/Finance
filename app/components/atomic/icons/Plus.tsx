import React from "react";
import { iconModel } from "./iconModel";
import clsx from "clsx";

export const Plus = ({ className, onClick }: iconModel) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(`cursor-pointer`, className)}
    >
      <path
        id="Vector"
        d="M10.6667 22.6667C10.6667 23.0203 10.8071 23.3594 11.0572 23.6095C11.3072 23.8595 11.6464 24 12 24C12.3536 24 12.6928 23.8595 12.9428 23.6095C13.1929 23.3594 13.3333 23.0203 13.3333 22.6667V13.3333H22.6667C23.0203 13.3333 23.3594 13.1929 23.6095 12.9428C23.8595 12.6928 24 12.3536 24 12C24 11.6464 23.8595 11.3072 23.6095 11.0572C23.3594 10.8071 23.0203 10.6667 22.6667 10.6667H13.3333V1.33333C13.3333 0.979711 13.1929 0.640573 12.9428 0.390524C12.6928 0.140476 12.3536 0 12 0C11.6464 0 11.3072 0.140476 11.0572 0.390524C10.8071 0.640573 10.6667 0.979711 10.6667 1.33333V10.6667H1.33333C0.979711 10.6667 0.640573 10.8071 0.390524 11.0572C0.140476 11.3072 0 11.6464 0 12C0 12.3536 0.140476 12.6928 0.390524 12.9428C0.640573 13.1929 0.979711 13.3333 1.33333 13.3333H10.6667V22.6667Z"
        fill="#191919"
      />
    </svg>
  );
};
