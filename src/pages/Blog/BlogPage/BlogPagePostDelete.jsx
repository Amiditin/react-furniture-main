import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../../redux/postsSlice';

import ConfirmRequest from '../../../components/ConfirmRequest';

function BlogPagePostDelete({ authorUid, postId }) {
  const [confirmRequest, setConfirmRequest] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    setConfirmRequest(false);
  }, [location]);

  return (
    <div>
      {user?.uid === authorUid && (
        <img
          className={`blog__post-delete ${confirmRequest && 'blog__post-delete--active'}`}
          src="/img/tools-icons/delete.svg"
          alt="delete"
          title="Удалить"
          onClick={() => setConfirmRequest(true)}
        />
      )}
      {confirmRequest && (
        <ConfirmRequest
          message="Удалить пост?"
          onConfirm={() => dispatch(deletePost({ postId: postId }))}
          onCancel={() => setConfirmRequest(false)}
        />
      )}
    </div>
  );
}

export default BlogPagePostDelete;
