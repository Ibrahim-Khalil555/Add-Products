import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getProducts = () => API.get('/products');
export const createProduct = (data: any) => API.post('/products', data);
export const updateProduct = (id: number, data: any) => API.put(`/products/${id}`, data);
export const deleteProduct = (id: number) => API.delete(`/products/${id}`);
