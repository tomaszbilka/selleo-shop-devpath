import api from './axios';

export const fetchProductsApi = () => {
  return api.get('/products');
};

export const fetchCategoriesApi = () => {
  return api.get('/categories');
};

export const fetchUsersApi = () => {
  return api.get('/users');
};

export const fetchAddressesApi = () => {
  return api.get('/addresses');
};
