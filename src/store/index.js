import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products';
import categoriesReducer from './categories';
import appStateReducer from './appState';
import cartReducer from './cart';

import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { usersAddressesApi } from 'utils/rtk-query-addresses';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    appState: appStateReducer,
    cart: cartReducer,
    [usersAddressesApi.reducerPath]: usersAddressesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersAddressesApi.middleware),
});

setupListeners(store.dispatch);
