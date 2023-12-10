"use client";
import React from "react";
import { ActionButton, SearchInput } from "../../atomic";
import { Cuenta } from "../../molecules";

export const Trasacciones = () => {
  return (
    <div className="">
      <section className="flex w-full justify-between my-[72px]">
        <SearchInput value={""} placeholder="Busca entre Transacciones" />
        <ActionButton>Agrega una transacción</ActionButton>
      </section>
      <section>
        
      </section>
    </div>
  );
};