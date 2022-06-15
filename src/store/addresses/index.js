import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAddressesApi } from 'utils/api';
import { keyBy } from 'lodash';

const initialState = {
  byId: {},
  status: null,
};

export const fetchAddresses = createAsyncThunk(
  'addresses/fetchAddresses',
  async () => {
    const response = await fetchAddressesApi();
    return keyBy(response.data, 'id');
  }
);

export const addressesSlice = createSlice({
  name: 'addresses',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAddresses.fulfilled]: (state, action) => {
      state.byId = action.payload;
      state.status = 'fulfilled';
    },
    [fetchAddresses.pending]: (state) => {
      state.status = 'pending';
    },
    [fetchAddresses.rejected]: (state) => {
      state.status = 'rejected';
    },
  },
});

export default addressesSlice.reducer;
