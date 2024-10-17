// src/utils/api.ts
import axios from 'axios';

// Set the base URL from environment variables
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
