import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCartModalOpen: false,
};

const appState = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    openCartModal(state) {
      state.isCartModalOpen = true;
    },
    closeCartModal(state) {
      state.isCartModalOpen = false;
    },
  },
});

export const { openCartModal, closeCartModal } = appState.actions;
export default appState.reducer;
