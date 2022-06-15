import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCategoriesApi } from 'utils/api';
import { keyBy } from 'lodash';

const initialState = {
  byId: {},
  status: null,
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await fetchCategoriesApi();
    return keyBy(response.data, 'id');
  }
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCategories.fulfilled]: (state, action) => {
      state.byId = action.payload;
      state.status = 'fulfilled';
    },
    [fetchCategories.pending]: (state) => {
      state.status = 'pending';
    },
    [fetchCategories.rejected]: (state) => {
      state.status = 'rejected';
    },
  },
});

export default categoriesSlice.reducer;
