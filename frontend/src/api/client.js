import axios from 'axios';

// Empty base URL in development (Vite proxy). Set VITE_API_URL in production.
const api = axios.create({
  baseURL: (import.meta.env.VITE_API_URL || '').replace(/\/$/, ''),
  timeout: 12000,
  headers: { 'Content-Type': 'application/json' },
});

export default api;
