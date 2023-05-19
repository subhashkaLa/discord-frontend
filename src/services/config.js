import axios from "axios";
import { create } from "apisauce";

const customAxiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/",
});

customAxiosInstance.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user");
    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const client = create({ axiosInstance: customAxiosInstance });

export default { client };
