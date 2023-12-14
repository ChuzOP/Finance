import React from "react";
import { iconModel } from "./iconModel";
import clsx from "clsx";

export const Bolso = ({ className, onClick }: iconModel) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      className={clsx(`cursor-pointer`, className)}
    >
      <path
        d="M1.91699 11.0839V11.0833V4.66667C1.91699 4.47963 1.97781 4.33171 2.11355 4.19598C2.24927 4.06026 2.39679 3.99978 2.58305 4.00001H2.58366H4.91699H5.41699V3.50001V2.33334C5.41699 2.16063 5.46885 2.02128 5.58366 1.89407V2.33334V3.50001V4.00001H6.08366H8.41699H8.91699V3.50001V2.33334V1.89401C9.03215 2.02132 9.08387 2.16046 9.08366 2.33273V2.33334V3.50001V4.00001H9.58366H11.917C12.104 4.00001 12.252 4.06082 12.3877 4.19656C12.5234 4.33228 12.5839 4.4798 12.5837 4.66607V4.66667V11.0833C12.5837 11.2704 12.5228 11.4183 12.3871 11.554C12.2514 11.6898 12.1039 11.7502 11.9176 11.75H11.917H2.58366C2.39662 11.75 2.2487 11.6892 2.11296 11.5535C1.97724 11.4177 1.91677 11.2702 1.91699 11.0839ZM6.08366 1.83334H5.64433C5.77164 1.71818 5.91078 1.66646 6.08305 1.66667H6.08366H8.41699C8.58971 1.66667 8.72906 1.71853 8.85626 1.83334H8.41699H6.08366Z"
        fill="#525256"
        stroke="#525256"
      />
    </svg>
  );
};