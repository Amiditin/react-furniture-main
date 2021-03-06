import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import postsReducer from './postsSlice';
import overlayReducer from './overlaySlice';
import commentsReducer from './commentsSlice';
import paginationReducer from './paginationSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    overlay: overlayReducer,
    pagination: paginationReducer,
    comments: commentsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
