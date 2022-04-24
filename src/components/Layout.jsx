import React from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getPosts } from '../redux/postsSlice';

import Footer from './Footer';
import Header from './Header';

function Layout() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
