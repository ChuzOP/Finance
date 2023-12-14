import { montserrat } from "@/app/utils/fonts";
import clsx from "clsx";
import React from "react";
import { SmallDot } from "../icons";

export const TransactionType = ({ variant }: { variant: number }) => {
  const handlerColor = (variant: number) => {
    switch (variant) {
      case 1:
        return "#4DAF6E";
      case 2:
        return "#E73D1C";
      case 3:
        return "#191919";
      case 4:
        return "#191919";
      default:
        return "#F4F5F7";
    }
  };
  const handlerText = (variant: number) => {
    switch (variant) {
      case 1:
        return "Ingreso";
      case 2:
        return "Egreso";
      case 3:
        return "Ahorro";
      case 4:
        return "Inversión";
      default:
        return "Ingreso";
    }
  };
  return (
    <div
      className={clsx(
        "flex w-20 p-[6px] items-center justify-center gap-2 rounded-lg text-xs font-semibold leading-4",
        {
          "bg-basics-greenThin text-basics-success": variant == 1,
          "bg-basics-redThin text-basics-error": variant == 2,
          "gradient-gold-small text-backgrounds-black": variant == 3,
          "bg-backgrounds-gray text-backgrounds-black border border-backgrounds-black w-[86px]": variant == 4,
        },
        montserrat.className,
      )}
    >
      <SmallDot color={handlerColor(variant)} className="w-[7px] h-[7px]" />
      {handlerText(variant)}
    </div>
  );
};
