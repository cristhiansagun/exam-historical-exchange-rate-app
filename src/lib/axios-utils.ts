import axios from 'axios'

const BASE_URL= 'https://openexchangerates.org/api'
const API_TOKEN = '032fc420e1a14ba880bab52e82b2397d'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Token ${API_TOKEN}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
