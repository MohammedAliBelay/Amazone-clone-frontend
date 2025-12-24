import axios from "axios";

//for Backend Communication
const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000" // for local host
  baseURL: "https://amazone-clone-backend-06tc.onrender.com", // for deployed backend on render.com
});

export { axiosInstance };
