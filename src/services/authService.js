import axios from "axios";

const API = "https://task-api-eight-flax.vercel.app";

export const loginUser = async (email, password) => {
  const response = await axios.post(`${API}/api/login`, {
    email,
    password,
  });
  return response.data;
};