import axios from "axios";
import { BASE_URL } from "@/utils/constants";
import Auth from "./auth";
import Blog from "./blog";

export const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api/v1`,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

const api = {
  auth: new Auth(axiosInstance),
  HttpClient: axiosInstance,
  blog: new Blog(axiosInstance),
};

export default api;
