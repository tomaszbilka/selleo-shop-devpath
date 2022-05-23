import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  amount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart() {},
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
