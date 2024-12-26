import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-api-endpoint/api',  // Set the base URL for your API
  timeout: 10000,  // Timeout in ms
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
