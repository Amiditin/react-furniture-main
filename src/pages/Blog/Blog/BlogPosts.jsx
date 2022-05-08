import { Link, useLocation } from 'react-router-dom';
import BlogItemInfo from '../../../components/BlogItemInfo';

function BlogPosts({ posts }) {
  const location = useLocation();

  return (
    <>
      {posts.map((post) => (
        <div className="blog__item" key={post.id}>
          {post.images[0] && (
            <Link to={`/blog/${post.name}${location.search}`}>
              <img className="blog__item-img" src={post.images[0]} alt="img" />
            </Link>
          )}
          <BlogItemInfo post={post} />
          <Link to={`/blog/${post.name}${location.search}`}>
            <h3 className="blog__item-title">{post.title}</h3>
          </Link>
          <p className="blog__item-text-cut">{post.text}</p>
        </div>
      ))}
    </>
  );
}

export default BlogPosts;
