import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { database } from '../utils/firebase-config';

export const addCreateComment = createAsyncThunk(
  'posts/addCreateComment',
  async ({ postId, comment }) => {
    const postRef = doc(database, 'blog-posts', postId);

    await updateDoc(postRef, { comments: arrayUnion(comment) });
    return { postId, comment };
  },
);

export const removeComment = createAsyncThunk(
  'posts/removeComment',
  async ({ postId, comment, index }) => {
    const postRef = doc(database, 'blog-posts', postId);

    await updateDoc(postRef, { comments: arrayRemove(comment) });
    return { postId, comment, index };
  },
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    data: null,
    status: undefined,
  },
  reducers: {},
  extraReducers: {
    [addCreateComment.pending]: (state) => {
      state.status = 'loading';
    },
    [addCreateComment.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = 'created';
    },
    [removeComment.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = 'removed';
    },
  },
});

export const { _ } = commentsSlice.actions;

export default commentsSlice.reducer;
