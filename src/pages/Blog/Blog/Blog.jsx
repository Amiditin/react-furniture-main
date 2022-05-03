import { useSelector } from 'react-redux';

import BlogPostsLoading from './BlogPostsLoading';
import BlogPagination from './BlogPagination';
import BlogPosts from './BlogPosts';
import Aside from '../Aside';

function Blog() {
  const { loading, posts } = useSelector((state) => state.posts);
  const { currentPage } = useSelector((state) => state.pagination);

  return (
    <main className="main">
      <section className="blog">
        <div className="container">
          <div className="blog__inner">
            <div className="blog__items">
              {loading ? (
                <BlogPostsLoading />
              ) : (
                <>
                  <BlogPosts posts={posts.slice(-3 + currentPage * 3, 0 + currentPage * 3)} />
                  <BlogPagination count={Math.ceil(posts.length / 3)} />
                </>
              )}
            </div>
            <Aside />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
