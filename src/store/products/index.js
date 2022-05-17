import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { keyBy } from 'lodash';

const initialState = {
  byId: {},
  status: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('http://localhost:3004/products');
    if (!response.ok) {
      throw new Error('Can not fetch data!');
    }
    const data = await response.json();
    return keyBy(data, 'id');
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
