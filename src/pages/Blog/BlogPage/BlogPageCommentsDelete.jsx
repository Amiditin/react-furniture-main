import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeComment } from '../../../redux/commentsSlice';

import ConfirmRequest from '../../../components/ConfirmRequest';

function BlogPageCommentsDelete({ comment, index, postId }) {
  const [confirmRequest, setConfirmRequest] = useState(false);
  const { data } = useSelector((state) => state.comments);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    setConfirmRequest(false);
  }, [location, data]);

  return (
    <>
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
        <ConfirmRequest
          message="Удалить комментарий?"
          onConfirm={() =>
            dispatch(removeComment({ postId: postId, comment: comment, index: index }))
          }
          onCancel={() => setConfirmRequest(false)}
        />
      )}
    </>
  );
}

export default BlogPageCommentsDelete;
