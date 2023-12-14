"use client";
import React from "react";
import { Category, Dots, Table, TransactionType } from "../../atomic";
import { TableColumn } from "react-data-table-component";

interface transaction {
  description: string;
  date: string;
  type: 1 | 2 | 3 | 4;
  amount: number;
  categoria: 1 | 2;
}

export const TransactionsTable = () => {
  const handleType = (type: transaction["type"]) => {
    switch (type) {
      case 1:
        return <div>Ingreso</div>;
        break;

      default:
        break;
    }
  };
  const handleCategory = (category: transaction["categoria"]) => {
    switch (category) {
      case 1:
        return <div>Games</div>;
        break;

      default:
        break;
    }
  };
  let columns: TableColumn<transaction>[] = [
    {
      name: "Descripción",
      selector: (row) => row.description,
      minWidth: "352px",
    },
    {
      name: "Fecha",
      selector: (row) => row.date,
      maxWidth: "210px",
    },
    {
      name: "Tipo",
      cell: (row) => <TransactionType variant={row.type} />,
      compact: true,
      maxWidth: "190px",
    },
    {
      name: "Monto",
      selector: (row) => `Q.${row.amount.toLocaleString("es-GT")}`,
      compact: true,
      maxWidth: "190px",
    },
    {
      name: "Categoria",
      cell: (row) => <Category variant={row.type} />,
      compact: true,
      maxWidth: "170px",
    },
    {
      name: "",
      cell: (row) => (
        <Dots className="ml-6" onClick={() => console.log("onclick")} />
      ),
      maxWidth: "110px",
    },
  ];
  return (
    <Table
      columns={columns}
      rows={rows}
      pending={false}
      noDataText="Sin coincidencias"
    />
  );
};

let rows: transaction[] = [
  {
    description: "Salary",
    date: "2023-01-01",
    type: 1,
    amount: 10000,
    categoria: 1,
  },
  {
    description: "Groceries",
    date: "2023-01-05",
    type: 2,
    amount: 500,
    categoria: 2,
  },
  {
    description: "Rent",
    date: "2023-01-15",
    type: 3,
    amount: 1500,
    categoria: 2,
  },
  {
    description: "Dinner with friends",
    date: "2023-02-01",
    type: 4,
    amount: 200,
    categoria: 2,
  },
  {
    description: "Gas bill",
    date: "2023-02-10",
    type: 3,
    amount: 50,
    categoria: 2,
  },
  {
    description: "Bonus",
    date: "2023-02-20",
    type: 1,
    amount: 500,
    categoria: 1,
  },
];
