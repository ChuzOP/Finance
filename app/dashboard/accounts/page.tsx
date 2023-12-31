import { Header } from "@/app/components/organisms";
import React from "react";
import { SearchInput, ActionButton } from "../../components/atomic";
import { Cuentas } from "../../components/templates";

const AccountsPage = () => {
  return (
    <div>
      <Header title="Cuentas" />
      <Cuentas />
    </div>
  );
};

export default AccountsPage;
