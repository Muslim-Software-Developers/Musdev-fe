import axios from "axios";
import { BASE_URL } from "@/utils/constants";
import Auth from "./auth";
import Blog from "./blog";
import Jobs from "./jobs";
import { getSession } from "next-auth/react";

export const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api/v1`,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    const authToken = session?.user.token;

    if (!config.headers["Authorization"]) {
      config.headers["Authorization"] = authToken
        ? `Bearer ${authToken}`
        : null;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

const api = {
  auth: new Auth(axiosInstance),
  HttpClient: axiosInstance,
  blog: new Blog(axiosInstance),
  jobs: new Jobs(axiosInstance),
};

export default api;
