import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const StockChart = () => {
  const [data, setData] = useState([1000]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => [...prev.slice(-20), prev[prev.length - 1] + (Math.random() - 0.5) * 50]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: Array.from({ length: data.length }, (_, i) => i),
    datasets: [
      {
        label: "Stock Value (Virtual)",
        data: data,
        borderColor: "#2563eb",
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-lg font-bold mb-2">Stock Graph (Virtual)</h2>
      <Line data={chartData} />
    </div>
  );
};

export default StockChart;
