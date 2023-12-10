import React from "react";
import clsx from "clsx";
import { montserrat } from "@/app/utils/fonts";
import styles from "./style.module.css";
import { Plus } from "..";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: string;
  variant?: "create";
};

export const ActionButton = ({
  children = "Text",
  variant = "create",
  ...rest
}: Props) => {
  const Icon = () => {
    switch (variant) {
      case "create":
        return <Plus />;

      default:
        break;
    }
  };

  return (
    <button
      className={clsx(
        `
          relative border rounded-lg p-4 text-base font-semibold tracking-wider shadow-02 overflow-hidden flex justify-start items-center gap-[14px]
          disabled:opacity-75 disabled:cursor-not-allowed
        `,
        {
          "text-backgrounds-black gradient-gold-large": variant === "create",
          "bg-gray-500 text-black": variant === "create",
        },
        montserrat.className,
        styles.buttonContainer,
      )}
      {...rest}
    >
      <Icon />
      {children}
      <div className={styles.overlay}></div>
    </button>
  );
};
