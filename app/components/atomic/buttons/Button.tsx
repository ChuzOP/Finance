import React from "react";
import clsx from "clsx";
import { montserrat } from "@/app/utils/fonts";
import styles from "./style.module.css";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: string;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
};

export const Button = ({
  children = "Text",
  variant = "primary",
  icon,
  iconPosition = "left",
  className = "",
  ...rest
}: Props) => {
  switch (variant) {
    case "primary":
      return (
        <button
          className={clsx(
            `
          relative border rounded-lg px-4 py-4 text-base font-bold tracking-wider shadow-02 overflow-hidden
          disabled:opacity-75 disabled:cursor-not-allowed
        `,
            {
              "text-backgrounds-black gradient-gold-large":
                variant === "primary",
            },
            montserrat.className,
            styles.buttonContainer,
            className
          )}
          {...rest}
        >
          {icon && iconPosition === "left" && icon}
          {children}
          {icon && iconPosition === "right" && icon}
          <div className={styles.overlay}></div>
        </button>
      );
    case "secondary":
      return (
        <button
          className={clsx(
            `
              flex h-10 items-center rounded-lg px-4 py-2 gap-4 bg-white border border-gray-gray04 text-gray-gray01 text-sm font-semibold leading-5
              transition
              hover:bg-gray-gray045
              disabled:bg-gray-gray05 disabled:cursor-not-allowed
            `,
            montserrat.className,
            className
          )}
          {...rest}
        >
          {icon && iconPosition === "left" && icon}
          {children}
          {icon && iconPosition === "right" && icon}
        </button>
      );
    default:
      break;
  }
};
