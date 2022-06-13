import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products';
import addressesReducer from './addresses';
import categoriesReducer from './categories';
import appStateReducer from './appState';
import cartReducer from './cart';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    appState: appStateReducer,
    cart: cartReducer,
    addresses: addressesReducer,
  },
});
