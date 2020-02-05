import axios from "axios";

const BASE_URL = "https://api.jikan.moe/v3";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10 * 1000
});

export default axiosInstance;
