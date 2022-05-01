import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { addCreateComment } from '../../../redux/postsSlice';
import { toggleOpened } from '../../../redux/overlaySlice';
import { getCurrentDate } from '../../../utils/scripts';

import Button from '../../../components/Button';
import CreatePostError from '../CreatePostError';

function BlogPageForm({ id }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ mode: 'onBlur' });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ text: '' });
    }
  }, [isSubmitSuccessful, reset]);

  const handleCreateComment = (data) => {
    dispatch(
      addCreateComment({
        id: id,
        comment: {
          authorUid: user.uid,
          author: user.displayName,
          avatar: user.photoURL,
          text: data.text,
          date: getCurrentDate(),
        },
      }),
    );
  };

  return (
    <div>
      {user ? (
        <form className="blog__item-form" onSubmit={handleSubmit(handleCreateComment)}>
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
    </div>
  );
}

export default BlogPageForm;
