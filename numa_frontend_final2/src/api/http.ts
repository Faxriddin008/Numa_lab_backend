import axios from 'axios';

export const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || 'http://localhost:8000';

export const http = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
});
