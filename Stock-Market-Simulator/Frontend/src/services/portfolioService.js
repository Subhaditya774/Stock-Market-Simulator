import api from "./api";

export const getPortfolio = async (username) => {
  const res = await api.get(`/portfolio/${username}`);
  return res.data;
};

export const buyStock = async (username, stockName, quantity, price) => {
  const res = await api.post("/portfolio/buy", {
    username,
    stockName,
    quantity,
    price,
  });
  return res.data;
};

export const sellStock = async (username, stockName, quantity, price) => {
  const res = await api.post("/portfolio/sell", {
    username,
    stockName,
    quantity,
    price,
  });
  return res.data;
};
