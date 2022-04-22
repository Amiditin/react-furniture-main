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

  const dataParse = (date) => {
    const list = [
      'Января',
      'Февраля',
      'Марта',
      'Апреля',
      'Мая',
      'Июня',
      'Июля',
      'Августа',
      'Сентября',
      'Октября',
      'Ноября',
      'Декабря',
    ];
    let [year, month, day] = date.split('.');
    month = list[Number(month) - 1];

    return `${day} ${month} ${year}`;
  };

  const getCurrentDate = () => {
    const newDate = new Date();
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();

    return `${year}.${month}.${day}`;
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog posts={blogPosts} dataParse={dataParse} />} />
        <Route
          path="blog/:name"
          element={
            <BlogPage posts={blogPosts} dataParse={dataParse} getCurrentDate={getCurrentDate} />
          }
        />
        <Route path="blog/create" element={<CreatePost getCurrentDate={getCurrentDate} />} />
      </Route>
    </Routes>
  );
}

export default App;
