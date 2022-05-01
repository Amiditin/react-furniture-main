import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Aside from '../Aside';
import BlogPageLoading from './BlogPageLoading';
import BlogPageContent from './BlogPageContent';
import BlogPageLinks from './BlogPageLinks';
import BlogPageComments from './BlogPageComments';
import BlogPageForm from './BlogPageForm';

function BlogItem() {
  const { name } = useParams();
  const { loading, posts } = useSelector((state) => state.posts);

  const post = posts.find((post) => post.name === name);

  return (
    <main className="main">
      <section className="blog">
        <div className="container">
          <div className="blog__inner">
            <div className="blog__items">
              {loading ? (
                <BlogPageLoading />
              ) : (
                <div className="blog__item">
                  <BlogPageContent post={post} />
                  <BlogPageLinks id={post.id} posts={posts} />
                  <BlogPageComments comments={post.comments} />
                  <BlogPageForm id={post.id} />
                </div>
              )}
            </div>
            <Aside />
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogItem;
