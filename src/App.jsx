import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Blog from './pages/Blog/Blog';
import BlogPage from './pages/Blog/BlogPage/BlogPage';
import CreatePost from './pages/Blog/CreatePost';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:name" element={<BlogPage />} />
        <Route path="blog/create" element={<CreatePost />} />
      </Route>
    </Routes>
  );
}

export default App;
