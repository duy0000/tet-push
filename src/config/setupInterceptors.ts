import { apiRefreshToken } from "../api/auth";
import http from "./http";
import { decodedToken } from "../services/utils/user.util";
import { TLoginResponse } from "../types/auth.type";
import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const onRefreshToken = async (refreshToken: string) => {
  const response = await apiRefreshToken({ refreshToken });
  if (!response.data) {
    return null;
  }
  return response.data.token;
};

const onRequest = (
  config: InternalAxiosRequestConfig<any>
): InternalAxiosRequestConfig<any> => {
  const authStore = localStorage.getItem("authStore");
  if (authStore) {
    const auth = JSON.parse(authStore);
    config.headers.authorization = `Bearer ${auth.state.token.accessToken}`;
  }

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  const { url, headers } = response.config;

  if (window.location.pathname === "/dang-nhap") {
    const data = response.data as TLoginResponse;
    headers.authorization = `Bearer ${data.token}`;
  } else if (url === "/dang-xuat") {
    localStorage.removeItem("authStore");
  }

  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[response error] [${JSON.stringify(error)}]`);
  const currentTime = new Date().getTime();
  const orignalRequest = error.config;

  if (error.response?.status === 403 || error.response?.status === 401) {
    const authStore = localStorage.getItem("authStore");
    if (!authStore) {
      return Promise.reject(error);
    }

    const auth = JSON.parse(authStore);
    const refreshToken = auth.state.token.refreshToken;

    if (!refreshToken) {
      return Promise.reject(error);
    }

    const decodedRFT = decodedToken(refreshToken);
    if (!decodedRFT) {
      return Promise.reject(error);
    }

    if (Number(decodedRFT.exp) * 1000 < currentTime) {
      return Promise.reject(error);
    }

    onRefreshToken(refreshToken)
      .then((token) => {
        if (!token) {
          return Promise.reject(error);
        }

        auth.state.token.accessToken = token;
        localStorage.setItem("authStore", JSON.stringify(auth));
        return http({
          ...orignalRequest,
          headers: { authorization: `Bearer ${token}` },
        });
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
  return Promise.reject(error);
};

export function setupInterceptors(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
