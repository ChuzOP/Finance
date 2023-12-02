"use client";
import React from "react";
import {
  Accounts,
  Analytics,
  Budget,
  Dashboard,
  Pays,
  Transactions,
} from "../../atomic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { montserrat } from "@/app/utils/fonts";

import styles from "./style.module.css";

let navItems = [
  {
    text: "Dashboard",
    href: "/dashboard",
    icon: Dashboard,
  },
  {
    text: "Cuentas",
    href: "/dashboard/accounts",
    icon: Accounts,
  },
  {
    text: "Transacciones",
    href: "/dashboard/transactions",
    icon: Transactions,
  },
  {
    text: "Pagos",
    href: "/dashboard/pays",
    icon: Pays,
  },
  {
    text: "Presupuesto",
    href: "/dashboard/budget",
    icon: Budget,
  },
  {
    text: "Analíticas",
    href: "/dashboard/analytics",
    icon: Analytics,
  },
];

export const NavList = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col mt-28">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.text}
            href={item.href}
            className={clsx(
              `flex justify-start items-center gap-5 my-2 rounded-lg px-5 py-[10px] text-xl font-medium w-60 max-w-60 ${styles.navButton}`,
              {
                [styles.navButtonActive]: pathname === item.href,
              },
              montserrat.className,
            )}
          >
            <Icon
              className={clsx(`${styles.navIcon}`, {
                [styles.navIconActive]: pathname === item.href,
              })}
            />
            <p className="hidden md:block">{item.text}</p>
          </Link>
        );
      })}
    </div>
  );
};
