import { Link } from 'react-router-dom';
import { dataParse } from '../../../utils/scripts';

function BlogPosts({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <div className="blog__item" key={post.id}>
          {post.images[0] && (
            <Link to={`/blog/${post.name}`}>
              <img className="blog__item-img" src={post.images[0]} alt="img" />
            </Link>
          )}
          <div className="blog__item-info">
            <span className="blog__item-date">{`${dataParse(post.date)} | `}</span>
            <span className="blog__item-author">{`${post.author} | `}</span>
            <span className="blog__item-category">{post.style}</span>
          </div>
          <Link to={`/blog/${post.name}`}>
            <h3 className="blog__item-title">{post.title}</h3>
          </Link>
          <p className="blog__item-text-cut">{post.text}</p>
        </div>
      ))}
    </>
  );
}

export default BlogPosts;
