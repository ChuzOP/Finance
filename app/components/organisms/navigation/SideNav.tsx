import Link from "next/link";
import React from "react";
import { Logo, NavButton, Dashboard } from "../../atomic";
import { montserrat } from "@/app/utils/fonts";
import { NavList } from "./NavList";
import { NavUtilityList } from "./NavUtilityList";

export const SideNav = () => {
  return (
    <div className="bg-backgrounds-black flex h-full flex-col items-center px-[18px]">
      <Link
        className="flex items-center mt-[72px] gap-[20px] w-[244px]"
        href="/"
      >
        <Logo className="w-12 h-12" />
        <div
          className={`text-white text-4xl font-normal leading-10 tracking-[1.25px] ${montserrat.className}`}
        >
          FINANCE
        </div>
      </Link>
      <NavList />
      <NavUtilityList />
    </div>
  );
};
