import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { database, storage } from '../utils/firebase-config';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, { rejectWithValue }) => {
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
});

export const addCreatePost = createAsyncThunk('posts/addCreatePost', async (post) => {
  if (post.images.length > 0) {
    let imgs = [];

    for (let i = 0; i < post.images.length; i++) {
      const storageRef = ref(storage, `/blog-posts-img/${post.name}/${post.images[i].name}`);

      await uploadBytes(storageRef, post.images[i]).then(async (snapshot) => {
        await getDownloadURL(snapshot.ref).then((url) => imgs.push(url));
      });
    }
    post.images = imgs;
  } else {
    post.images = [];
  }

  await addDoc(collection(database, 'blog-posts'), post).then((data) => (post.id = data.id));

  return post;
});

export const deletePost = createAsyncThunk('posts/deletePost', async ({ postId }) => {
  await deleteDoc(doc(database, 'blog-posts', postId));

  return { postId };
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    filteredPosts: [],
    loading: true,
    error: false,
  },
  reducers: {
    addComment(state, { payload }) {
      for (let i = 0; i < state.posts.length; i++) {
        if (state.posts[i].id === payload.postId) {
          state.posts[i].comments.push(payload.comment);
          break;
        }
      }
    },
    deleteComment(state, { payload }) {
      for (let i = 0; i < state.posts.length; i++) {
        if (state.posts[i].id === payload.postId) {
          state.posts[i].comments.splice(payload.index, 1);
          break;
        }
      }
    },
    filterPosts(state, { payload }) {
      state.filteredPosts = state.posts.filter(
        (post) =>
          (payload.search
            ? post.title.toLowerCase().includes(payload.search.toLowerCase()) ||
              post.author.toLowerCase().includes(payload.search.toLowerCase())
            : true) &&
          (payload.style ? post.style === payload.style : true) &&
          (payload.coating.length !== 0
            ? payload.coating.every((item) => post.coating.includes(item))
            : true) &&
          (payload.decor.length !== 0
            ? payload.decor.every((item) => post.decor.includes(item))
            : true),
      );
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchPosts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.filteredPosts = state.posts = payload;
    },
    [fetchPosts.rejected]: (state) => {
      state.loading = true;
      state.error = true;
    },
    [addCreatePost.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [addCreatePost.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.posts.unshift(payload);
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      state.error = false;
      for (let i = 0; i < state.posts.length; i++) {
        if (state.posts[i].id === payload.postId) {
          state.posts.splice(i, 1);
          break;
        }
      }
      for (let i = 0; i < state.filteredPosts.length; i++) {
        if (state.filteredPosts[i].id === payload.postId) {
          state.filteredPosts.splice(i, 1);
          break;
        }
      }
    },
  },
});

export const { addComment, deleteComment, filterPosts } = postsSlice.actions;

export default postsSlice.reducer;
