import api from './axios';

export const fetchProductsApi = () => {
  return api.get('/products');
};

export const fetchCategoriesApi = () => {
  return api.get('/categories');
};
