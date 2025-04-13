import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api", // or your Vercel Edge URL
});

export const askAgent = async (query) => {
  const response = await API.post("/chat", { query });
  return response.data;
};
