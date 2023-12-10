"use client";
import React from "react";
import { ActionButton, SearchInput } from "../../atomic";
import { Cuenta } from "../../molecules";

export const Cuentas = () => {
  return (
    <div className="">
      <section className="flex w-full justify-between my-[72px]">
        <SearchInput value={""} placeholder="Busca una cuenta" />
        <ActionButton>Agrega una cuenta</ActionButton>
      </section>
      <section>
        {cuentas.map((item, index) => (
          <Cuenta
            key={index}
            name={item.name}
            saldo={item.saldo}
            type={item.type}
            divisa={item.divisa}
          />
        ))}
      </section>
    </div>
  );
};

let cuentas = [
  {
    name: "G&T",
    type: "Efectivo",
    saldo: 45000,
    divisa: "Quetzales",
  },
  {
    name: "G&T",
    type: "Efectivo",
    saldo: 45000,
    divisa: "Quetzales",
  },
  {
    name: "G&T",
    type: "Efectivo",
    saldo: 45000,
    divisa: "Quetzales",
  },
  {
    name: "G&T",
    type: "Efectivo",
    saldo: 45000,
    divisa: "Quetzales",
  },
  {
    name: "G&T",
    type: "Efectivo",
    saldo: 45000,
    divisa: "Quetzales",
  },
  {
    name: "G&T",
    type: "Efectivo",
    saldo: 45000,
    divisa: "Quetzales",
  },
  {
    name: "G&T",
    type: "Efectivo",
    saldo: 45000,
    divisa: "Quetzales",
  },
  {
    name: "G&T",
    type: "Efectivo",
    saldo: 45000,
    divisa: "Quetzales",
  },
];
