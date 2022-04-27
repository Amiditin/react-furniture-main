import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, provider } from '../utils/firebase-config';
import { signInWithPopup, signOut } from 'firebase/auth';

export const signInWithGoogle = createAsyncThunk('auth/signInWithGoogle', async () => {
  await signInWithPopup(auth, provider);
});

export const singUserOut = createAsyncThunk('auth/singUserOut', async () => {
  await signOut(auth);

  return null;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    getCurrentUser(state, { payload }) {
      state.user = payload.user;
    },
  },
  extraReducers: {
    [singUserOut.fulfilled]: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { getCurrentUser } = authSlice.actions;

export default authSlice.reducer;
