'use client';
import React from "react";
import { Logout, Profile, Settings } from "../../atomic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { montserrat } from "@/app/utils/fonts";

import styles from "./style.module.css";

let navItems = [
  {
    text: "Configuración",
    href: "/config",
    icon: Settings,
  },
  {
    text: "Perfil",
    href: "/profile",
    icon: Profile,
  },
  {
    text: "Log out",
    href: "/",
    icon: Logout,
    action: () => console.log("first"),
  },
];

export const NavUtilityList = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col mt-auto mb-4">
      {navItems.map((item) => {
        const Icon = item.icon;

        if (item.action) {
          return (
            <div
              key={item.text}
              className={clsx(
                `flex justify-start items-center gap-5 my-2 rounded-lg px-5 py-[10px] text-xl font-medium w-60 max-w-60 ${styles.navButton}`,
                {
                  [styles.navButtonActive]: pathname === item.href,
                },
                montserrat.className,
              )}
              onClick={item.action}
            >
              <Icon
                className={clsx(`${styles.navIcon}`, {
                  [styles.navIconActive]: pathname === item.href,
                })}
              />
              <p className="hidden md:block">{item.text}</p>
            </div>
          );
        }

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
