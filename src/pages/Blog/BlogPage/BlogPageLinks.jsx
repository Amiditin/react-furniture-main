import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function BlogPageLinks({ postId, posts }) {
  const [prevPost, setPrevPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setPrevPost(null);
    setNextPost(null);
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id === postId) {
        if (i !== 0) {
          setPrevPost({ title: posts[i - 1].title, name: posts[i - 1].name });
        }
        if (i !== posts.length - 1) {
          setNextPost({ title: posts[i + 1].title, name: posts[i + 1].name });
        }
        return;
      }
    }
  }, [postId, posts]);

  return (
    <div className="blog__item-links">
      <div className="blog__item-link-p">
        {prevPost && (
          <Link className="blog__item-link-prev" to={`/blog/${prevPost.name}${location.search}`}>
            <img
              className="blog__item-img-prev"
              src="/img/tools-icons/arrow-norm-left.svg"
              alt="arrow"
            />
            {prevPost.title}
          </Link>
        )}
      </div>
      <div className="blog__item-link-n">
        {nextPost && (
          <Link className="blog__item-link-next" to={`/blog/${nextPost.name}${location.search}`}>
            {nextPost.title}
            <img
              className="blog__item-img-next"
              src="/img/tools-icons/arrow-norm-right.svg"
              alt="arrow"
            />
          </Link>
        )}
      </div>
    </div>
  );
}

export default BlogPageLinks;
