import React from "react";
import WalletCard from "../components/WalletCard.jsx";
import MarketTable from "../components/MarketTable.jsx";
import StockChart from "../components/StockChart.jsx";

const Dashboard = () => {
  return (
    <div className="p-4 space-y-6">
      <WalletCard />
      <MarketTable />
      <StockChart />
    </div>
  );
};

export default Dashboard;

