import api from "./apiClient";

export const getInstructors = async () => {
  const res = await api.get("/instructors");
  return res.data;
};
