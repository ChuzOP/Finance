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
  ...rest
}: Props) => {
  return (
    <button
      className={clsx(
        `
          relative border rounded-lg px-4 py-4 text-base font-bold tracking-wider shadow-02 overflow-hidden
          disabled:opacity-75 disabled:cursor-not-allowed
        `,
        {
          "text-backgrounds-black gradient-gold-large": variant === "primary",
          "bg-gray-500 text-black": variant === "secondary",
        },
        montserrat.className,
        styles.buttonContainer
      )}
      {...rest}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
      <div className={styles.overlay}></div>
    </button>
  );
};
