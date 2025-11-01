import React, { useState, useEffect, useContext } from "react";
import { nifty50 } from "../data/nifty50.js";
import { buyStock, sellStock } from "../services/portfolioService.js";
import { UserContext } from "../context/UserContext.jsx";

const MarketTable = () => {
  const { user } = useContext(UserContext);
  const [stocks, setStocks] = useState(nifty50);

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prev) =>
        prev.map((s) => ({
          ...s,
          price: parseFloat((s.price + (Math.random() - 0.5) * 10).toFixed(2)),
        }))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleBuy = async (stock) => {
    if (!user) return alert("Please login");
    await buyStock(user.username, stock.name, 1, stock.price);
    alert(`Bought 1 share of ${stock.name} at ₹${stock.price}`);
  };

  const handleSell = async (stock) => {
    if (!user) return alert("Please login");
    await sellStock(user.username, stock.name, 1, stock.price);
    alert(`Sold 1 share of ${stock.name} at ₹${stock.price}`);
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-lg mt-4">
      <h2 className="text-xl font-semibold mb-2">📈 Market Watch (Virtual)</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Stock</th>
            <th className="p-2 border">Price (₹)</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.name} className="hover:bg-gray-50">
              <td className="p-2 border">{stock.name}</td>
              <td className="p-2 border text-blue-600 font-semibold">
                ₹{stock.price.toFixed(2)}
              </td>
              <td className="p-2 border">
                <button
                  onClick={() => handleBuy(stock)}
                  className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                >
                  Buy
                </button>
                <button
                  onClick={() => handleSell(stock)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Sell
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketTable;
