import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products';
import categoriesReducer from './categories';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
  },
});
