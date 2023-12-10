import React from "react";
import { SmallDot } from "../icons";
import clsx from "clsx";

export const Dots = ({
  onClick = () => {},
  className,
}: {
  onClick?: any;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        `flex items-start cursor-pointer -rotate-90 gap-[2px]`,
        className,
      )}
      onClick={onClick}
    >
      <SmallDot />
      <SmallDot />
      <SmallDot />
    </div>
  );
};
