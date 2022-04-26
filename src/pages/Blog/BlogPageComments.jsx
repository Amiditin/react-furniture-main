import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleOpened } from '../../redux/overlaySlice';
import { doc, setDoc } from 'firebase/firestore';
import { database } from '../../utils/firebase-config';
import { useForm } from 'react-hook-form';

import Button from '../../components/Button';
import CreatePostError from './CreatePostError';

function BlogPageComments({ id, postComments, dataParse, getCurrentDate }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [comments, setComments] = useState(postComments);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    console.log(data);
    const postRef = doc(database, 'blog-posts', id);

    setComments([
      {
        uid: user.uid,
        avatar: user.photoURL,
        name: user.displayName,
        date: getCurrentDate(),
        text: data.text,
      },
      ...comments,
    ]);
    console.log(comments);
    setDoc(
      postRef,
      {
        comments: [
          {
            uid: user.uid,
            avatar: user.photoURL,
            name: user.displayName,
            date: getCurrentDate(),
            text: data.text,
          },
          ...comments,
        ],
      },
      { merge: true },
    );
  };

  return (
    <>
      <div className="blog__item-comments">
        <h4 className="blog__item-comments-title">Комментарии:</h4>
        {comments[0] ? (
          <div className="blog__item-comments-items">
            {comments.map((comment, index) => (
              <div className="blog__item-comments-item" key={index}>
                <img className="blog__item-comments-avatar" src={comment.avatar} alt="avatar" />
                <div className="blog__item-comments-info">
                  <p className="blog__item-comments-name">{comment.name}</p>
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
      {user ? (
        <form className="blog__item-form" onSubmit={handleSubmit(onSubmit)}>
          <h4 className="blog__item-form-title">Оставить комментрарий</h4>
          <textarea
            {...register('text', {
              required: 'Комментарий должен быть написан',
              minLength: { value: 20, message: 'Минимум 20 символов' },
            })}
            className="textarea"
            placeholder="Ваш комментарий..."
          />
          {errors?.text && <CreatePostError errors={errors?.text} />}
          <Button ClassName="black" Type="submit">
            Отправить
          </Button>
        </form>
      ) : (
        <div className="blog__item-authorization">
          <h1 className="blog__item-authorization-title">Авторизация</h1>
          <p className="blog__item-authorization-text">
            Чтобы оставить комментарий необходимо авторизоваться!
          </p>
          <Button ClassName="tab" onClick={() => dispatch(toggleOpened())}>
            Авторизоваться
          </Button>
        </div>
      )}
    </>
  );
}

export default BlogPageComments;
