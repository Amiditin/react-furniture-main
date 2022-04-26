import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import postsReducer from './postsSlice';
import overlayReducer from './overlaySlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    overlay: overlayReducer,
  },
});
