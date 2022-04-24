import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDocs, collection } from 'firebase/firestore';
import { database } from '../utils/firebase-config';

export const getPosts = createAsyncThunk('posts/getPosts', async (thunkAPI) => {
  const data = await getDocs(collection(database, 'blog-posts'));
  return data.docs
    .map((doc) => ({ ...doc.data(), id: doc.id }))
    .sort((prev, next) => {
      if (prev.date > next.date) return -1;
      if (prev.date < next.date) return 1;
      return 0;
    });
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
    },
    [getPosts.rejected]: (state) => {
      state.loading = false;
    },
  },
});

// export const { } = postsSlice.actions;

export default postsSlice.reducer;
