// api.js – minimal version only for posting submissions
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// POST a new insurance application
export const submitInsurance = (formData) => api.post('/insurance/submit/', formData);

// Optional: fetch plans if needed for your form (keep if you use it)
export const fetchPlans = () => api.get('/plans/');

export default api;