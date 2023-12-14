import { montserrat } from "@/app/utils/fonts";
import clsx from "clsx";
import React from "react";
import { Bolso, Clothes, Game, ShoppingCart } from "..";

export const Category = ({ variant }: { variant: number }) => {
  const handlerText = (variant: number) => {
    switch (variant) {
      case 1:
        return "Compras";
      case 2:
        return "Juegos";
      case 3:
        return "Ropa";
      case 4:
        return "Salario";
      default:
        return "Varios";
    }
  };

  return (
    <div
      className={clsx(
        "flex w-24 p-[6px] items-center justify-start gap-2 rounded-lg text-xs font-semibold leading-4",
        "border border-gray-gray01 text-gray-gray01 bg-backgrounds-gray",
        montserrat.className,
      )}
    >
      {handlerIcon(variant)}
      {handlerText(variant)}
    </div>
  );
};

const handlerIcon = (variant: number) => {
  switch (variant) {
    case 1:
      return <ShoppingCart />;
    case 2:
      return <Game />;
    case 3:
      return <Clothes />;
    case 4:
      return <Bolso />;
    default:
      return <ShoppingCart />;
  }
};
