import { useNavigate } from 'react-router-dom';
import { dataParse } from '../utils/scripts';

function BlogItemInfo({ post }) {
  const navigate = useNavigate();

  const handleOnClickAuthor = (author) => {
    navigate('/blog', {
      state: {
        search: author,
        style: '',
        coating: [],
        decor: [],
      },
    });
  };

  const handleOnClickStyle = (style) => {
    navigate('/blog', {
      state: {
        search: '',
        style: style,
        coating: [],
        decor: [],
      },
    });
  };

  return (
    <div className="blog__item-info">
      <span className="blog__item-date">{`${dataParse(post.date)} | `}</span>
      <span className="blog__item-author" onClick={() => handleOnClickAuthor(post.author)}>
        {`${post.author} | `}
      </span>
      <span className="blog__item-style" onClick={() => handleOnClickStyle(post.style)}>
        {post.style}
      </span>
    </div>
  );
}

export default BlogItemInfo;
