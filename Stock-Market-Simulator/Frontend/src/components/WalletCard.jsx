import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { getUser } from "../services/UserService.js";

const WalletCard = () => {
  const { user } = useContext(UserContext);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (user) {
      getUser(user.username).then((data) => {
        setBalance(data.walletBalance);
      });
    }
  }, [user]);

  return (
    <div className="bg-white shadow-md p-4 rounded-lg w-full md:w-1/2">
      <h2 className="text-xl font-semibold mb-2">💰 Wallet Balance</h2>
      <p className="text-2xl font-bold text-green-600">₹{balance.toFixed(2)}</p>
    </div>
  );
};

export default WalletCard;
