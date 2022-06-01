import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCartModalOpen: false,
};

const appState = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    toggleCartModal(state, action) {
      state.isCartModalOpen = action.payload;
    },
  },
});

export const { toggleCartModal } = appState.actions;
export default appState.reducer;
