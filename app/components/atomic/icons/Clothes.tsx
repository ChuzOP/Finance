import React from "react";
import { iconModel } from "./iconModel";
import clsx from "clsx";

export const Clothes = ({ className, onClick }: iconModel) => {
  return (
    <svg
      height="14"
      width="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(`cursor-pointer`, className)}
    >
      <rect height="14" width="14" />
      <g id="Icons">
        <rect
          width="1440"
          height="1572"
          transform="translate(-296 -583)"
          fill="none"
        />
        <g id="Frame 343">
          <g id="Icons/Categorias/Clothes">
            <path
              id="Vector"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.70688 3.879C6.26936 3.31635 7.0323 3.00017 7.82788 3C8.61788 3 9.77588 2.78 10.1299 3.711C10.2742 4.09004 10.5303 4.41628 10.8643 4.64645C11.1983 4.87663 11.5943 4.99989 11.9999 4.99989C12.4055 4.99989 12.8015 4.87663 13.1355 4.64645C13.4694 4.41628 13.7255 4.09004 13.8699 3.711C14.2239 2.781 15.3829 3.001 16.1719 3.001C16.967 3.00117 17.7295 3.31696 18.2919 3.879L21.9999 7.586C22.3748 7.96106 22.5855 8.46967 22.5855 9C22.5855 9.53033 22.3748 10.0389 21.9999 10.414L20.5219 11.892C20.0019 12.412 19.2759 12.581 18.6219 12.418L18.8939 17.85C18.9142 18.2561 18.8518 18.662 18.7104 19.0432C18.569 19.4244 18.3516 19.7729 18.0714 20.0675C17.7912 20.3621 17.4541 20.5967 17.0804 20.757C16.7068 20.9173 16.3045 21 15.8979 21H8.10188C7.6953 21 7.29298 20.9173 6.91934 20.757C6.5457 20.5967 6.20854 20.3621 5.92834 20.0675C5.64813 19.7729 5.43074 19.4244 5.28936 19.0432C5.14797 18.662 5.08555 18.2561 5.10588 17.85L5.37788 12.418C5.04274 12.5023 4.69146 12.4982 4.35841 12.4059C4.02535 12.3137 3.72195 12.1367 3.47788 11.892L1.99988 10.414C1.62494 10.0389 1.41431 9.53033 1.41431 9C1.41431 8.46967 1.62494 7.96106 1.99988 7.586L5.70688 3.879Z"
              fill="#525256"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
