import axios from "axios";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
  // baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export default instance;
