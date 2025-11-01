import React from "react";
import MarketTable from "../components/MarketTable";
import WalletCard from "../components/WalletCard";

export default function MarketPage(){
  return (
    <div className="space-y-4">
      <WalletCard />
      <MarketTable />
    </div>
  );
}
