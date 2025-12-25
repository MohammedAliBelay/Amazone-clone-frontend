import axios from "axios";

//for Backend Communication
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/e-clone-dcba3/us-central1/api", // for local host
  baseURL: "http://localhost:5000", // for local host

  // baseURL: "https://amazone-clone-backend-06tc.onrender.com", // for deployed backend on render.com
});

export { axiosInstance };
