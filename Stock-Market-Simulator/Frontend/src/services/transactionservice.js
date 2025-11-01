import api from "./api";

export const getTransactions = async (username) => {
  const res = await api.get(`/transactions/${username}`);
  return res.data;
};
