import { Route, Routes } from 'react-router-dom';

import React from 'react'

import Footer from './components/Footer';
import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPage from './pages/Blog/BlogPage';

function App() {

  const [blogItem, setBlogItem] = React.useState([]);

  // React.useEffect(() => {
  //   const getBlogItems = async () => {
  //     const data = await () => {
  //
  //     }
  //   }
  // }, []);



  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blogpage" element={<BlogPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
