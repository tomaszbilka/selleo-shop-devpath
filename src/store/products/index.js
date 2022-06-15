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
    return keyBy(response.data, 'id');
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleFavoriteState(state, action) {
      const productToToggleFavoriteState = state.byId[action.payload];
      productToToggleFavoriteState.isFavorite =
        !productToToggleFavoriteState.isFavorite;
    },
  },
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

export const { toggleFavoriteState } = productsSlice.actions;
export default productsSlice.reducer;
