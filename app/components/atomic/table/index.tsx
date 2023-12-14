"use client";
import React from "react";
import DataTable, {
  ConditionalStyles,
  TableColumn,
  TableStyles,
} from "react-data-table-component";
import { NoDataComponent } from "./utils";
import { inter } from "@/app/utils/fonts";

interface props {
  columns: TableColumn<any>[];
  rows: any;
  pending: boolean;
  onSort?: any;
  noDataText?: string;
}

export const Table = ({
  columns = [],
  rows,
  pending,
  noDataText = "No se encontraro Registros",
}: props) => {
  return (
    <div className="rounded-lg">
      <DataTable
        columns={columns}
        data={rows}
        progressPending={pending}
        noDataComponent={<NoDataComponent text={noDataText} />}
        customStyles={customStyles}
        pointerOnHover
        // highlightOnHover
      />
    </div>
  );
};
const customStyles: TableStyles = {
  headCells: {
    style: {
      backgroundColor: "#191919",
      color: "#F4F5F7",
      fontFamily: inter.style.fontFamily,
      fontWeight: 500,
      paddingLeft: "24px",
      paddingRight: "24px",
      fontSize: "12px",
    },
  },
  cells: {
    style: {
      backgroundColor: "#FFFFFF",
      color: "#878787",
      fontFamily: inter.style.fontFamily,
      fontWeight: 400,
      borderBottomColor: "#E8E8E8",
      padding: "24px",
    },
  },
  // rows: {
  //   highlightOnHoverStyle: {
  //     backgroundColor: "#878787",
  //     // transitionDuration: "0.15s",
  //     // transitionProperty: "background-color",
  //     // outlineStyle: "solid",
  //     // outlineWidth: "1px",
  //     outlineColor: "#E8E8E8",
  //   },
  // },
  table: {
    style: {
      borderRadius: "8px",
    },
  },
};
