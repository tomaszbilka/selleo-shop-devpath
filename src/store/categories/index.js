import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { keyBy } from 'lodash';

const initialState = {
  byId: {},
  status: null,
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await fetch('http://localhost:3004/categories');
    if (!response.ok) {
      throw new Error('Can not fetch data!');
    }
    const data = await response.json();
    console.log('CATEGORIES:' + data);
    return keyBy(data, 'id');
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
