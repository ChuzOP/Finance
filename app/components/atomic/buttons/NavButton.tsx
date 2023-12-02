"use client";

import React from "react";
import clsx from "clsx";
import { montserrat } from "@/app/utils/fonts";
import styles from "./style.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
  children: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  href: string;
};

export const NavButton = ({
  children = "Text",
  icon,
  href,
  ...rest
}: Props) => {
  const pathname = usePathname();
  return (
    <Link
      key={href}
      href={href}
      className={clsx(
        `
          relative rounded-lg px-5 py-[10px] text-base font-bold tracking-wider w-60 max-w-60 flex justify-start items-center gap-5
          disabled:opacity-75 disabled:cursor-not-allowed
          navButton
        `,
        {
          "navButtonActive": pathname === href,
        },
        montserrat.className,
      )}
      {...rest}
      
    >
      {icon}
      {children}
    </Link>
  );
};
