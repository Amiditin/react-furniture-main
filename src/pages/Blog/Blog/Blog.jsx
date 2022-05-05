import { useSelector } from 'react-redux';

import BlogPostsLoading from './BlogPostsLoading';
import BlogPagination from './BlogPagination';
import BlogPosts from './BlogPosts';
import Aside from '../Aside';

function Blog() {
  const { loading, filteredPosts } = useSelector((state) => state.posts);
  const { currentPage } = useSelector((state) => state.pagination);

  return (
    <main className="main">
      <section className="blog">
        <div className="container">
          <div className="blog__inner">
            <div className="blog__items">
              {loading ? (
                <BlogPostsLoading />
              ) : filteredPosts.length !== 0 ? (
                <>
                  <BlogPosts
                    posts={filteredPosts.slice(-3 + currentPage * 3, 0 + currentPage * 3)}
                  />
                  <BlogPagination count={Math.ceil(filteredPosts.length / 3)} />
                </>
              ) : (
                <div className="blog__not-found">
                  <h1 className="blog__not-found-title">Ошибка поиска</h1>
                  <p className="blog__not-found-text">Не удалось найти посты</p>
                </div>
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
