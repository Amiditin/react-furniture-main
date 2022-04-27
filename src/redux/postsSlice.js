import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, doc, getDocs, addDoc, updateDoc, arrayUnion } from 'firebase/firestore';
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

  await addDoc(collection(database, 'blog-posts'), post).then();

  return post;
});

export const addCreateComment = createAsyncThunk(
  'posts/addCreateComment',
  async ({ id, comment }) => {
    const postRef = doc(database, 'blog-posts', id);
    console.log(id, postRef);
    await updateDoc(postRef, { comments: arrayUnion(comment) }).then(console.log('отправил'));
    return { id, comment };
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
    [addCreatePost.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [addCreatePost.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.posts.unshift(payload);
    },
    [addCreateComment.fulfilled]: (state, { payload }) => {
      for (let i = 0; i < state.posts.length; i++) {
        if (state.posts[i].id === payload.id) {
          state.posts[i].comments.push(payload.comment);
          break;
        }
      }
    },
  },
});

export const { _ } = postsSlice.actions;

export default postsSlice.reducer;
