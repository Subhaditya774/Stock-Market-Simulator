import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { getTransactions } from "../services/transactionService.js";

const TransactionHistory = () => {
  const { user } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (user) {
      getTransactions(user.username).then(setTransactions);
    }
  }, [user]);

  return (
    <div className="bg-white shadow-md p-4 rounded-lg mt-4">
      <h2 className="text-xl font-semibold mb-3">🧾 Transaction History</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Stock</th>
            <th className="p-2 border">Type</th>
            <th className="p-2 border">Quantity</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((t, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="p-2 border">{t.stockName}</td>
                <td
                  className={`p-2 border font-bold ${
                    t.type === "BUY" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {t.type}
                </td>
                <td className="p-2 border">{t.quantity}</td>
                <td className="p-2 border">₹{t.price.toFixed(2)}</td>
                <td className="p-2 border">
                  {new Date(t.timestamp).toLocaleString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-4 text-gray-500">
                No transactions yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
