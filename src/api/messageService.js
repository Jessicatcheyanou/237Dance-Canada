import api from "./apiClient";

export const sendMessage = async (data) => {
  const res = await api.post("/messages", data);
  return res.data;
};
