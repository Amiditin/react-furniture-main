import { dataParse } from '../../../utils/scripts';

function BlogPageComments({ comments }) {
  return (
    <div className="blog__item-comments">
      <h4 className="blog__item-comments-title">Комментарии:</h4>
      {comments[0] ? (
        <div className="blog__item-comments-items">
          {comments.map((comment, index) => (
            <div className="blog__item-comments-item" key={index}>
              <img className="blog__item-comments-avatar" src={comment.avatar} alt="avatar" />
              <div className="blog__item-comments-info">
                <p className="blog__item-comments-name">{comment.author}</p>
                <p className="blog__item-comments-date">{dataParse(comment.date)}</p>
                <p className="blog__item-comments-text">
                  {comment.text.split('\n').map((value, index) => (
                    <span key={index}>
                      {value}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
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
