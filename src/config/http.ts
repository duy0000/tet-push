import axios from "axios";
import { setupInterceptors } from "./setupInterceptors";

const TIME_OUT = 10000;

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: TIME_OUT,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": import.meta.env.VITE_URL_ORIGIN,
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  },
});

setupInterceptors(http);

export default http;
