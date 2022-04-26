import { createSlice } from '@reduxjs/toolkit';

const overlaySlice = createSlice({
  name: 'overlay',
  initialState: {
    opened: false,
  },
  reducers: {
    toggleOpened(state) {
      state.opened = !state.opened;
    },
  },
});

export const { toggleOpened } = overlaySlice.actions;

export default overlaySlice.reducer;
