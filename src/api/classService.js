import api from "./apiClient";

export const getClasses = async () => {
  const res = await api.get("/classes");
  return res.data;
};

export const createClass = async (data) => {
  const res = await api.post("/classes", data);
  return res.data;
};
