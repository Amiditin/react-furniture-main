import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDocs, collection } from 'firebase/firestore';
import { database } from '../utils/firebase-config';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (thunkAPI, { rejectWithValue }) => {
    try {
      const data = await getDocs(collection(database, 'blog-posts'));

      if (data.empty) throw new Error('Get 0 posts');

      return data.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .sort((prev, next) => {
          if (prev.date > next.date) return -1;
          if (prev.date < next.date) return 1;
          return 0;
        });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchPosts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.posts = payload;
    },
    [fetchPosts.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

// export const { } = postsSlice.actions;

export default postsSlice.reducer;
