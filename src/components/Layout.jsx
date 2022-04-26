import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/postsSlice';
import { getCurrentUser } from '../redux/authSlice';

import Footer from './Footer';
import Header from './Header';

function Layout() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(fetchPosts());

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => user && dispatch(getCurrentUser({ user })));
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
