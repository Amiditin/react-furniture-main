import React from 'react';
import { Link } from 'react-router-dom';

function BlogBox() {
  return (
    <section className="blog-box">
      <div className="container">
        <h3 className="blog-box__title">More inspiration ideas in our blog</h3>
        <div className="blog-box__items">
          <div className="blog-box__item">
            <Link className="blog-box__link" to="/">
              <img className="blog-box__img" src="/img/blog/1.jpg" alt="blof-img" />
            </Link>
            <div className="blog-box__links">
              <span className="blog-box__date">March 12, 2020 | </span>
              <Link className="blog-box__author" to="/">
                by Ann Summers
              </Link>
              <Link className="blog-box__theme" to="/">
                | Inrerior
              </Link>
            </div>
            <Link className="blog-box__item-titlelink" to="/">
              <h4 className="blog-box__item-title">
                Listicle actually selvage activated charcoal for the drinking vinegar{' '}
              </h4>
            </Link>
          </div>
          <div className="blog-box__item">
            <Link className="blog-box__link" to="/">
              <img className="blog-box__img" src="/img/blog/2.jpg" alt="blof-img" />
            </Link>
            <div className="blog-box__links">
              <span className="blog-box__date">September 28,2020 | </span>
              <Link className="blog-box__author" to="/">
                by Finnagan Morningstar
              </Link>
              <Link className="blog-box__theme" to="/">
                | Dining room interior
              </Link>
            </div>
            <Link className="blog-box__item-titlelink" to="/">
              <h4 className="blog-box__item-title">
                Red selfies edison bulb four dollar toast humblebrag
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogBox;
