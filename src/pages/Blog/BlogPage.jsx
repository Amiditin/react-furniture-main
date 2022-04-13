import React from 'react';
import { Link } from 'react-router-dom';

import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import Carousel from '../../components/Carousel';

import Aside from './Aside';

function BlogItem({ blog }) {
  console.log(blog);
  return (
    <main className="main">
      <section className="blog">
        <div className="container">
          <div className="blog__inner">
            <div className="blog__items">
              <div className="blog__item">
                {blog.img && <Carousel images={blog.img} />}
                <div className="blog__item-info">
                  <span className="blog__item-date">{`${blog.date} | `}</span>
                  <span className="blog__item-author">{`${blog.author} | `}</span>
                  <span className="blog__item-style">{blog.style}</span>
                </div>
                <h3 className="blog__item-title">{blog.title}</h3>
                <p className="blog__item-text">{blog.text}</p>
                <div className="blog__item-coating">
                  <h4 className="blog__item-title">Покрытие</h4>
                  {blog.coating.map((item, index) => (
                    <span className="blog__coating-item" key={index}>
                      {item}
                    </span>
                  ))}
                </div>
                {blog.decor && (
                  <div className="blog__decor">
                    <h4 className="blog__item-title">Декор</h4>
                    {blog.decor.map((item, index) => (
                      <span className="blog__item-decor" key={index}>
                        {item}
                      </span>
                    ))}
                  </div>
                )}
                <div className="blog__item-links">
                  <Link className="blog__item-link blog__item-link-prev" to="/">
                    <img
                      className="blog__item-img-prev"
                      src="/img/arrow-norm-left.svg"
                      alt="arrow"
                    />
                    Cred selfies edison bulb four dollar toast humblebrag
                  </Link>
                  <Link className="blog__item-link blog__item-link-next" to="/">
                    Semiotics fixie four dollar toast, next level
                    <img
                      className="blog__item-img-next"
                      src="/img/arrow-norm-right.svg"
                      alt="arrow"
                    />
                  </Link>
                </div>
                <div className="blog__item-comments">
                  <h4 className="blog__item-comments-title">Комментарии:</h4>
                  {blog.comments ? (
                    <div className="blog__item-comments-items">
                      {blog.comments.map((comment, index) => (
                        <div className="blog__item-comments-item">
                          <img
                            className="blog__item-comments-avatar"
                            src={comment.avatar}
                            alt="avatar"
                          />
                          <div className="blog__item-comments-info">
                            <p className="blog__item-comments-name">{comment.name}</p>
                            <p className="blog__item-comments-date">{comment.date}</p>
                            <p className="blog__item-comments-text">{comment.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div class className="blog__item-nocomments">
                      Здесь пока нет ни одного комментария, вы можете стать первым!
                    </div>
                  )}
                </div>
                <div className="blog__item-form">
                  <h4 className="blog__item-form-title">Оставить комментрарий</h4>
                  <TextArea placeholder="Ваш комментарий..." />
                  <Button ClassName="black">Отправить</Button>
                </div>
              </div>
            </div>
            <Aside />
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogItem;
