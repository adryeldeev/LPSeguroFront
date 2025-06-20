// usePublicApi.ts
import axios from "axios";

const usePublicApi = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default usePublicApi;
