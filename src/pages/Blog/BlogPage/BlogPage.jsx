import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, deleteComment } from '../../../redux/postsSlice';

import Aside from '../Aside';
import BlogPageLoading from './BlogPageLoading';
import BlogPageContent from './BlogPageContent';
import BlogPageLinks from './BlogPageLinks';
import BlogPageComments from './BlogPageComments';
import BlogPageForm from './BlogPageForm';

function BlogItem() {
  const { name } = useParams();
  const { loading, posts } = useSelector((state) => state.posts);
  const { data, status } = useSelector((state) => state.comments);

  const dispatch = useDispatch();
  const post = posts.find((post) => post.name === name);

  useEffect(() => {
    status === 'created' && dispatch(addComment({ postId: data.postId, comment: data.comment }));
    status === 'removed' &&
      dispatch(deleteComment({ postId: data.postId, comment: data.comment, index: data.index }));
  }, [dispatch, status, data]);

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
                  <BlogPageLinks postId={post.id} posts={posts} />
                  <BlogPageComments postId={post.id} comments={post.comments} />
                  <BlogPageForm postId={post.id} />
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
