import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 60_000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
