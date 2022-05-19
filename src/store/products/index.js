import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductsApi } from 'utils/api';
import { keyBy } from 'lodash';

const initialState = {
  byId: {},
  status: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetchProductsApi();
    if (!response.statusText === 'OK' || !response.data) {
      throw new Error('Can not fetch data!');
    }
    return keyBy(response.data, 'id');
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.byId = action.payload;
      state.status = 'fulfilled';
    },
    [fetchProducts.pending]: (state) => {
      state.status = 'pending';
    },
    [fetchProducts.rejected]: (state) => {
      state.status = 'rejected';
    },
  },
});

export default productsSlice.reducer;
