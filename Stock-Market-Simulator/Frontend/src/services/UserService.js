import api from "./api";

export const loginUser = async (username) => {
  const res = await api.post("/users/login", { username });
  return res.data;
};

export const getUser = async (username) => {
  const res = await api.get(`/users/${username}`);
  return res.data;
};
