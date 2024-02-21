import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosRequestHeaders  } from 'axios';
import { getAccessToken } from '../components/Auth/auth';

const BASE_URL = process.env.REACT_APP_API_URL; // Your API base URL
const ACCESS_TOKEN_KEY = getAccessToken(); // Key to store access token in local storage

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
    headers: AxiosRequestHeaders
}
const apiService = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Adjust the timeout as needed
  headers: {
    'X-Security-Check': 'true',
    'Accept': 'application/json',
  },
});

// Interceptor for handling request with access token
apiService.interceptors.request.use(
  (config): AdaptAxiosRequestConfig => {
    config.headers = config.headers ?? {};
    
    if (ACCESS_TOKEN_KEY) {
      config.headers.Authorization = `Bearer ${ACCESS_TOKEN_KEY}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Interceptor for handling unauthorized requests
apiService.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response.data;
  },
  async (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      // Unauthorized error, handle token expiration or invalid token
      // Example: Redirect to login page or refresh token
      console.error('Unauthorized request:', error);
      // Example: Redirect to login page
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiService;