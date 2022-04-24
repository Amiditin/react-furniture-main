import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { dataParse } from '../../utils/scripts';
import Aside from './Aside';

function Blog() {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <main className="main">
      <section className="blog">
        <div className="container">
          <div className="blog__inner">
            <div className="blog__items">
              {posts &&
                posts.map((post) => (
                  <div className="blog__item" key={post.id}>
                    {post.images && (
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
              <div className="pagination">
                <img
                  className="pagination__arrow pagination__arrow--disabled"
                  src="img/arrow-left.svg"
                  alt="arrow"
                />
                <ul className="pagination__list">
                  <li className="pagination__list-item pagination__list-item--active">1</li>
                  <li className="pagination__list-item">2</li>
                  <li className="pagination__list-item">3</li>
                </ul>
                <img className="pagination__arrow" src="img/arrow-right.svg" alt="arrow" />
              </div>
            </div>
            <Aside />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
