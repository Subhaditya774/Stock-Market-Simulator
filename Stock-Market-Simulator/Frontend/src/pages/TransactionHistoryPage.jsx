import React, { useEffect, useState } from "react";

export default function TransactionHistoryPage(){
  const [tx, setTx] = useState([]);

  useEffect(()=>{
    const stored = JSON.parse(localStorage.getItem("transactions")) || [];
    setTx(stored.slice().reverse());
  },[]);

  const clearAll = ()=>{
    if (!confirm("Clear all transactions?")) return;
    localStorage.removeItem("transactions");
    setTx([]);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Transaction History</h2>
        {tx.length>0 && <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={clearAll}>Clear</button>}
      </div>

      {tx.length===0 ? <p className="text-gray-600">No transactions yet.</p> :
      <div className="bg-white rounded shadow overflow-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2 text-left">Time</th>
              <th className="px-3 py-2 text-left">Stock</th>
              <th className="px-3 py-2 text-right">Qty</th>
              <th className="px-3 py-2 text-right">Price</th>
              <th className="px-3 py-2 text-center">Type</th>
            </tr>
          </thead>
          <tbody>
            {tx.map((t,i)=>(
              <tr key={i} className="border-t">
                <td className="px-3 py-2 text-sm text-gray-600">{new Date(t.timestamp).toLocaleString()}</td>
                <td className="px-3 py-2">{t.stock}</td>
                <td className="px-3 py-2 text-right">{t.quantity}</td>
                <td className="px-3 py-2 text-right">₹ {t.price}</td>
                <td className={`px-3 py-2 text-center font-semibold ${t.type==="BUY"?"text-green-600":"text-red-600"}`}>{t.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>}
    </div>
  );
}
