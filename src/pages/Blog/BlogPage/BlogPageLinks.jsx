import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BlogPageLinks({ id, posts }) {
  const [prevPost, setPrevPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);

  useEffect(() => {
    setPrevPost(null);
    setNextPost(null);
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id === id) {
        if (i !== 0) {
          setPrevPost({ title: posts[i - 1].title, name: posts[i - 1].name });
        }
        if (i !== posts.length - 1) {
          setNextPost({ title: posts[i + 1].title, name: posts[i + 1].name });
        }
        return;
      }
    }
  }, [id, posts]);

  return (
    <div className="blog__item-links">
      <div className="blog__item-link-p">
        {prevPost && (
          <Link className="blog__item-link-prev" to={`/blog/${prevPost.name}`}>
            <img className="blog__item-img-prev" src="/img/arrow-norm-left.svg" alt="arrow" />
            {prevPost.title}
          </Link>
        )}
      </div>
      <div className="blog__item-link-n">
        {nextPost && (
          <Link className="blog__item-link-next" to={`/blog/${nextPost.name}`}>
            {nextPost.title}
            <img className="blog__item-img-next" src="/img/arrow-norm-right.svg" alt="arrow" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default BlogPageLinks;
