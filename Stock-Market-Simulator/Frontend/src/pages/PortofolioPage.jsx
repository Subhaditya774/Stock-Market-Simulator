import React, { useEffect, useState, useContext } from "react";
import { getPortfolio } from "../services/portfolioService.js";
import { UserContext } from "../context/UserContext.jsx";

const PortfolioPage = () => {
  const { user } = useContext(UserContext);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    if (user) {
      getPortfolio(user.username).then(setPortfolio);
    }
  }, [user]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Portfolio</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th>Stock</th>
            <th>Quantity</th>
            <th>Avg Price</th>
            <th>Current Price</th>
            <th>Profit/Loss</th>
          </tr>
        </thead>
        <tbody>
          {portfolio.map((p) => (
            <tr key={p.stockName}>
              <td>{p.stockName}</td>
              <td>{p.quantity}</td>
              <td>{p.avgPrice.toFixed(2)}</td>
              <td>{p.currentPrice.toFixed(2)}</td>
              <td
                className={
                  p.currentPrice - p.avgPrice > 0 ? "text-green-600" : "text-red-600"
                }
              >
                ₹{(p.currentPrice - p.avgPrice).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioPage;
