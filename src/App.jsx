import { Route, Routes } from 'react-router-dom';
import React from 'react';

import Layout from './components/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Blog from './pages/Blog/Blog';
import BlogPage from './pages/Blog/BlogPage';
import CreatePost from './pages/Blog/CreatePost';
import NotFound from './pages/NotFound';

import { getDocs, collection } from 'firebase/firestore';
import { database } from './firebase-config';

function App() {
  const [blogPosts, setBlogPosts] = React.useState([
    {
      comments: [],
      title: '',
      style: '',
      date: '',
      img: [],
      text: '',
      coating: [],
      author: '',
      name: '',
      id: '',
      decor: [],
    },
  ]);

  React.useEffect(() => {
    const getBlogPostss = async () => {
      const data = await getDocs(collection(database, 'blog-posts'));
      setBlogPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBlogPostss();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog posts={blogPosts} />} />
        <Route path="blog/:name" element={<BlogPage posts={blogPosts} />} />
        <Route path="blog/create" element={<CreatePost />} />
      </Route>
    </Routes>
  );
}

export default App;
