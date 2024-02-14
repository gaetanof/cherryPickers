import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'https://cherry-pickers.vercel.app/api',
});

export default axiosConfig;