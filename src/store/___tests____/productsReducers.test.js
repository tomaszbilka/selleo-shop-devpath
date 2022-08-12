import { configureStore } from '@reduxjs/toolkit';

describe('products reducers tests', () => {
  const initialState = {
    byId: {},
    status: null,
  };

  const productStore = configureStore({
    reducer: function (state = initialState, action) {
      switch (action.type) {
        case 'products/fetchProducts':
          return {
            byId: action.payload,
            status: 'fulfilled',
          };
        default:
          return state;
      }
    },
  });

  test('test initial value of store - products', () => {
    const state = productStore.getState();
    expect(state.byId).toEqual({});
    expect(state.status).toBe(null);
  });
});
