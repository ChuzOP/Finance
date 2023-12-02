import { roboto } from "@/app/utils/fonts";
import clsx from "clsx";
import React from "react";

import styles from "./style.module.css";
import { Text } from "../texts/Text";

type props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  error: string;
  value: string | number;
  className?: string;
  icon?: React.ReactNode;
};
export const Input = ({
  label,
  error,
  onChange,
  value,
  className,
  disabled = false,
  icon,
  ...rest
}: props) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label
        className={`${roboto.className} text-backgrounds-black text-[16px] leading-6 font-normal`}
      >
        {label}
      </label>
      <div className="relative my-1">
        <input
          className={clsx(
            `
            w-full bg-white border border-solid rounded-lg !border-gray-gray02 !text-gray-gray02 transition-all p-4
            focus:border-backgrounds-black focus:!text-backgrounds-black
            focus-visible:outline-1
          `,
            {
              "bg-gray-200": disabled,
              "bg-blue-100": !disabled && !error,
              "bg-red-100": !disabled && error,
              "cursor-not-allowed": disabled,
              "cursor-pointer": !disabled,
            },
            roboto.className,
          )}
          value={value}
          onChange={onChange}
          {...rest} // Rest operator to spread the remaining props
        />
        {icon && (
          <div
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${styles.icon}`}
          >
            {icon}
          </div>
        )}
      </div>
      <Text variant={"text-01"} className="text-basics-error">
        {error}
      </Text>
    </div>
  );
};
