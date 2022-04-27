import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { dataParse } from '../../../utils/scripts';

import Carousel from '../../../components/Carousel';
import Aside from '../Aside';
import BlogPageComments from './BlogPageComments';
import BlogPageForm from './BlogPageForm';
import BlogPageLinks from './BlogPageLinks';

function BlogItem() {
  const { name } = useParams();
  const posts = useSelector((state) => state.posts.posts);

  const post = posts.find((post) => post.name === name);

  return (
    <main className="main">
      <section className="blog">
        <div className="container">
          <div className="blog__inner">
            {post && (
              <>
                <div className="blog__items">
                  <div className="blog__item">
                    {post.images[0] && <Carousel images={post.images} />}
                    <div className="blog__item-info">
                      <span className="blog__item-date">{`${dataParse(post.date)} | `}</span>
                      <span className="blog__item-author">{`${post.author} | `}</span>
                      <span className="blog__item-style">{post.style}</span>
                    </div>
                    <h3 className="blog__item-title">{post.title}</h3>
                    <p className="blog__item-text">
                      {post.text.split('\n').map((value, index) => (
                        <span key={index}>
                          {value}
                          <br />
                        </span>
                      ))}
                    </p>
                    {post.coating && (
                      <div className="blog__item-coating">
                        <h4 className="blog__item-title">Покрытие</h4>
                        {post.coating.map((item, index) => (
                          <span className="blog__coating-item" key={index}>
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                    {post.decor && (
                      <div className="blog__decor">
                        <h4 className="blog__item-title">Декор</h4>
                        {post.decor.map((item, index) => (
                          <span className="blog__item-decor" key={index}>
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                    <BlogPageLinks id={post.id} posts={posts} />
                    <BlogPageComments comments={post.comments} />
                    <BlogPageForm id={post.id} />
                  </div>
                </div>
                <Aside />
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogItem;
