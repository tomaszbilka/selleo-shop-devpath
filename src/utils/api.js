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

export const registerNewUser = (data) => {
  const newUser = {
    ...data,
    id: Math.round(Math.random() * 99999) + 1,
  };
  return api.post('/users', newUser, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
