import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeComment } from '../../../redux/commentsSlice';
import { dataParse } from '../../../utils/scripts';

import BlogPageCommentsLoading from './BlogPageCommentsLoading';
import Button from '../../../components/Button';

function BlogPageComments({ postId, comments }) {
  const [confirmRequest, setConfirmRequest] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { data, status } = useSelector((state) => state.comments);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    setConfirmRequest(false);
  }, [location, data]);

  return (
    <div className="blog__comments">
      <h4 className="blog__comments-title">Комментарии:</h4>
      {comments[0] ? (
        <div className="blog__comments-items">
          {comments.map((comment, index) => (
            <div className="blog__comments-item" key={index}>
              <img className="blog__comments-avatar" src={comment.avatar} alt="avatar" />
              <div className="blog__comments-info">
                <p className="blog__comments-name">{comment.author}</p>
                <p className="blog__comments-date">{dataParse(comment.date)}</p>
                <p className="blog__comments-text">
                  {comment.text.split('\n').map((value, index) => (
                    <span key={index}>
                      {value}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
              {user?.uid === comment.authorUid && (
                <img
                  className={`blog__comments-delete ${
                    confirmRequest === index && 'blog__comments-delete--active'
                  }`}
                  src="/img/tools-icons/delete.svg"
                  alt="delete"
                  title="Удалить"
                  onClick={() => setConfirmRequest(index)}
                />
              )}
              {confirmRequest === index && (
                <div className="blog__comments-confirm">
                  <span className="blog__comments-confirm-title">Удалить комментарий?</span>
                  <div className="blog__comments-confirm-buttons">
                    <Button ClassName="tab" onClick={() => setConfirmRequest(false)}>
                      Отмена
                    </Button>
                    <Button
                      ClassName="black"
                      onClick={() =>
                        dispatch(removeComment({ postId: postId, comment: comment, index: index }))
                      }>
                      Удалить
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
          {status === 'loading' && <BlogPageCommentsLoading />}
        </div>
      ) : (
        <div className="blog__item-nocomments">
          Здесь пока нет ни одного комментария, вы можете стать первым!
        </div>
      )}
    </div>
  );
}

export default BlogPageComments;
