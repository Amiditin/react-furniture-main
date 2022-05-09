import { useSelector } from 'react-redux';
import { dataParse } from '../../../utils/scripts';

import BlogPageCommentsLoading from './BlogPageCommentsLoading';
import BlogPageCommentsDelete from './BlogPageCommentsDelete';

function BlogPageComments({ comments, postId }) {
  const { status } = useSelector((state) => state.comments);

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
              <BlogPageCommentsDelete comment={comment} index={index} postId={postId} />
            </div>
          ))}
          {status === 'loading' && <BlogPageCommentsLoading />}
        </div>
      ) : (
        <>
          {status === 'loading' ? (
            <BlogPageCommentsLoading />
          ) : (
            <div className="blog__item-nocomments">
              Здесь пока нет ни одного комментария, вы можете стать первым!
              <br />
              <br />
              　∧＿∧
              <br />
              （｡･ω･｡)つ━☆・*。
              <br />
              ⊂　　 ノ 　　　・゜+.
              <br />
              　しーＪ　　　°。+ *´¨)
              <br />
              　　　　　　　　　.• ´¸.•*´¨) ¸.•*¨)
              <br />
              　　　　　　　　　　(¸.•´ (¸.•’*
              <br />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default BlogPageComments;
