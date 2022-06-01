import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const isUnique = !state.items.some(
        (item) => item.id === action.payload.id
      );

      if (isUnique) {
        state.items.push({
          ...action.payload,
          number_of_items: 1,
        });
      } else {
        const addedItemId = action.payload.id;
        const addedItem = state.items.find((item) => item.id === addedItemId);
        addedItem.number_of_items += 1;
      }
    },
    removeFromCart(state, action) {
      const productIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== productIdToRemove);
    },
    clearCart(state) {
      state.items = [];
    },
    removeOneItemFromCart(state, action) {
      const removedItemId = action.payload;
      const removedItem = state.items.find((item) => item.id === removedItemId);
      if (removedItem.number_of_items > 1) {
        removedItem.number_of_items -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, removeOneItemFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
