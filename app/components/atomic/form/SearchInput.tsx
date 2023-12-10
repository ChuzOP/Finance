import React from "react";
import clsx from "clsx";

import { Text } from "../texts/Text";
import { roboto } from "@/app/utils/fonts";

import styles from "./style.module.css";
import { Search } from "../icons/Search";

type props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  value: string;
  className?: string;
};

export const SearchInput = ({
  value,
  className,
  onChange,
  disabled,
  ...rest
}: props) => {
  return (
    <div className="relative my-1">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search />
      </div>
      <input
        className={clsx(
          `
            p-4 pl-14 w-[556px] max-w-[556px] border rounded-2xl border-gray-gray04 !bg-white !text-gray-gray02 transition-all
            focus:border-backgrounds-black focus:!text-backgrounds-black
            focus-visible:outline-1
          `,
          roboto.className,
        )}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};
