import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'http://localhost:5038/api',
  // baseURL: 'https://cherry-pickers.vercel.app/api',
});

export default axiosConfig;