import api from './axios';
import { v4 as uuidv4 } from 'uuid';

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

export const registerNewUser = (data) => {
  const newUser = {
    ...data,
    id: uuidv4(),
  };
  return api.post('/users', newUser, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
