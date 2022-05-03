import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: 1,
    countPages: undefined,
  },
  reducers: {
    getCountPages(state, { payload }) {
      state.countPages = payload.count;
    },
    goToPage(state, { payload }) {
      state.currentPage = payload.page;
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth',
      });
    },
  },
});

export const { getCountPages, goToPage } = paginationSlice.actions;

export default paginationSlice.reducer;
