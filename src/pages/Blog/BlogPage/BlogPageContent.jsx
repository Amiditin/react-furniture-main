import Carousel from '../../../components/Carousel';
import BlogItemInfo from '../../../components/BlogItemInfo';
import BlogPagePostDelete from './BlogPagePostDelete';

function BlogPageContent({ post }) {
  return (
    <div className="blog__item-content">
      {post.images[0] && <Carousel images={post.images} />}
      <BlogItemInfo post={post} />
      <h3 className="blog__item-title">
        {post.title}
        <BlogPagePostDelete authorUid={post.authorUid} postId={post.id} />
      </h3>
      <p className="blog__item-text">
        {post.text.split('\n').map((value, index) => (
          <span key={index}>
            {value}
            <br />
          </span>
        ))}
      </p>
      {post.coating[0] && (
        <div className="blog__item-coating">
          <h4 className="blog__item-title">Покрытие</h4>
          {post.coating.map((item, index) => (
            <span className="blog__coating-item" key={index}>
              {item}
            </span>
          ))}
        </div>
      )}
      {post.decor[0] && (
        <div className="blog__decor">
          <h4 className="blog__item-title">Декор</h4>
          {post.decor.map((item, index) => (
            <span className="blog__item-decor" key={index}>
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogPageContent;
