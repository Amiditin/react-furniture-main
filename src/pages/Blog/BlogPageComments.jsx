import React from 'react';

import { doc, setDoc } from 'firebase/firestore';
import { database, auth } from '../../utils/firebase-config';
import { useForm } from 'react-hook-form';

import Button from '../../components/Button';
import CreatePostError from './CreatePostError';

function BlogPageComments({ id, postComments, dataParse, getCurrentDate }) {
  const [comments, setComments] = React.useState(postComments);

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
        uid: auth.currentUser.providerData[0].uid,
        avatar: auth.currentUser.photoURL,
        name: auth.currentUser.displayName,
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
            uid: auth.currentUser.providerData[0].uid,
            avatar: auth.currentUser.photoURL,
            name: auth.currentUser.displayName,
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
    </>
  );
}

export default BlogPageComments;
