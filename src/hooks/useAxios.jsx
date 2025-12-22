import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://contest-hub-backend-taupe.vercel.app",
});
const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
