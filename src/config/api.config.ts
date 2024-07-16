import axios from "axios";
const host = import.meta.env.VITE_HOST;
const api = axios.create({
  baseURL: host,
});

export default api;
