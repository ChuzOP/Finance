"use client";
import React from "react";
import {
  ActionButton,
  SearchInput,
  Button,
  Calendar,
  Filter,
  Arrow,
  Text,
} from "../../atomic";
import { Cuenta, TransactionsTable } from "../../molecules";

export const Trasacciones = () => {
  return (
    <div className="">
      <section className="flex w-full justify-between mt-[72px] mb-10">
        <SearchInput value={""} placeholder="Busca entre Transacciones" />
        <ActionButton>Agrega una transacción</ActionButton>
      </section>
      <section>
        <div className="flex justify-end gap-4 py-4">
          <Button variant="secondary" icon={<Calendar />}>
            Este mes
          </Button>
          <Button variant="secondary" icon={<Filter />}>
            Filtros
          </Button>
        </div>
        <TransactionsTable />
        <div className="flex justify-between w-full items-center">
          <Text variant="text-01" semibold className="text-gray-gray01">
            Page 1 of 5
          </Text>
          <div className="flex justify-end gap-4 py-4">
            <Button variant="secondary" icon={<Arrow />} className="gap-1">
              Anterior
            </Button>
            <Button
              variant="secondary"
              iconPosition="right"
              icon={<Arrow className="rotate-180" />}
              className="gap-1"
            >
              Siguiente
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
