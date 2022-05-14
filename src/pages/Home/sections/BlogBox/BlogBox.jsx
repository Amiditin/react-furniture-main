import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BlogBoxItem from './BlogBoxItem';
import BlogBoxLoading from './BlogBoxLoading';

function BlogBox() {
  const { loading, posts } = useSelector((state) => state.posts);

  return (
    <section className="blog-box">
      <div className="container">
        <Link to="/blog">
          <h3 className="blog-box__title">Больше вдохновляющих идей в нашем блоге</h3>
        </Link>
        <div className="blog-box__items">
          {loading ? (
            <>
              <BlogBoxLoading />
              <BlogBoxLoading />
            </>
          ) : (
            <>
              <BlogBoxItem post={posts[0]} />
              <BlogBoxItem post={posts[1]} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default BlogBox;
