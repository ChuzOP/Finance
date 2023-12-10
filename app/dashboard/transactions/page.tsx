import { Header } from "@/app/components/organisms";
import React from "react";
import { SearchInput, ActionButton } from "../../components/atomic";
import { Trasacciones } from "../../components/templates";

const AccountsPage = () => {
  return (
    <div>
      <Header title="Transacciones" />
      <Trasacciones />
    </div>
  );
};

export default AccountsPage;
