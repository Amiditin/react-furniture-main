import { Link } from 'react-router-dom';
import BlogItemInfo from '../../../../components/BlogItemInfo';

function BlogBoxItem({ post }) {
  return (
    <div className="blog-box__item">
      <Link className="blog-box__link" to={`/blog/${post.name}`}>
        <img className="blog-box__img" src={post.images[0]} alt="blog-img" />
      </Link>
      <BlogItemInfo post={post} />
      <Link className="blog-box__item-titlelink" to={`/blog/${post.name}`}>
        <h4 className="blog-box__item-title">{post.title}</h4>
      </Link>
    </div>
  );
}

export default BlogBoxItem;
