import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">📊 Stock Simulator</div>

      {user ? (
        <div className="flex space-x-4">
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link to="/portfolio" className="hover:underline">
            Portfolio
          </Link>
          <Link to="/wallet" className="hover:underline">
            Wallet
          </Link>
          <Link to="/transactions" className="hover:underline">
            Transactions
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link to="/" className="bg-white text-blue-600 px-3 py-1 rounded">
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
