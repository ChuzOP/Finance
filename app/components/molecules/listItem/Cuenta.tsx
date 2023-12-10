"use client";
import React from "react";
import { Efectivo } from "../../atomic";
import clsx from "clsx";
import { inter, montserrat } from "@/app/utils/fonts";
import { Dots } from "../../atomic/buttons/Dots";

interface props {
  name: string;
  type: "Efectivo" | "Crédito" | "Débito" | string;
  saldo: number;
  divisa: "Quetzales" | "Dolares" | string;
}

export const Cuenta = ({
  name = "",
  type = "Efectivo",
  saldo = 0,
  divisa = "Quetzales",
}: props) => {
  const divisaSymbol = () => {
    switch (divisa) {
      case "Quetzales":
        return "Q";
      case "Dolares":
        return "$";

      default:
        break;
    }
  };
  return (
    <div className="flex transition p-6 justify-between items-center rounded-lg bg-white shadow-01 mt-6 cursor-pointer hover:bg-gray-gray05">
      <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gray-gray05 flex justify-center items-center">
        <Efectivo />
      </div>
      <div className="ml-4 flex flex-col gap-y-1 items-start w-full">
        <div
          className={clsx(
            `text-base font-semibold leading-5 text-backgrounds-black`,
            montserrat.className,
          )}
        >
          {name}
        </div>
        <div
          className={clsx(
            `text-sm font-medium leading-5 text-gray-gray03`,
            inter.className,
          )}
        >
          {type}
        </div>
      </div>
      <div
        className={clsx(
          `text-xl font-medium leading-7 whitespace-nowrap`,
          montserrat.className,
        )}
      >
        {`${divisaSymbol()} ${saldo.toLocaleString("es-GT")}`}
      </div>
      <Dots className="ml-6" onClick={() => console.log("onclick")} />
    </div>
  );
};
