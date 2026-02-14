import axios from "axios";

export const BASE_URL = import.meta.env.MODE === "development" 
  ? "http://localhost:5000" 
  : "https://chatingapp-1-33eb.onrender.com";

export const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true, 
});