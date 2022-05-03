import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { listСategories } from '../../../utils/constants/listСategories';

import Button from '../../../components/Button';
import FormError from '../../../components/FormError';

function CreatePostForm({ createPost }) {
  const { user } = useSelector((state) => state.auth);
  const { style, coating, decor } = listСategories;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    defaultValues: { style: style.list[0].name, coating: [], decor: [] },
  });

  const [author, setAuthor] = useState(user.displayName);
  const [editAuthor, setEditAuthor] = useState(true);
  const [countImages, setCountImages] = useState(0);

  const onSubmit = (data) => {
    data.author = author;
    createPost(data);
  };

  const handleUploadImages = (event) => {
    setCountImages(event.target.files.length);
  };

  return (
    <form className="create-post__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="create-post__content">
        <div className="create-post__author">
          <div className="create-post__author-items">
            {editAuthor ? (
              <img
                className="create-post__author-edit"
                src="/img/tools-icons/edit.svg"
                alt="edit"
                onClick={() => setEditAuthor(false)}
              />
            ) : (
              <img
                className="create-post__author-check"
                src="/img/tools-icons/check.svg"
                alt="edit"
                onClick={() => setEditAuthor(true)}
              />
            )}
            <span className="create-post__author-span">Автор:</span>
            <input
              className="input create-post__author-input"
              placeholder="Автор"
              {...register('author', {
                required: 'Автор не указан',
                minLength: { value: 5, message: 'Минимум 5 символов' },
                disabled: editAuthor,
              })}
              onChange={(event) => setAuthor(event.target.value)}
              value={author}
            />
          </div>
          {errors?.author && <FormError errors={errors?.author} />}
        </div>
        <div className="create-post__input">
          <input
            className="input"
            {...register('title', {
              required: 'Заголовок обязателен к заполнению',
              minLength: { value: 5, message: 'Минимум 5 символов' },
            })}
            placeholder="Заголовок"
            type="text"
          />
          {errors?.title && <FormError errors={errors?.title} />}
        </div>
        <div className="create-post__textarea">
          <textarea
            {...register('text', {
              required: 'Текст поста обязателен к заполнению',
              minLength: { value: 40, message: 'Минимум 40 символов' },
            })}
            className="textarea"
            placeholder="Введите текст поста"
          />
          {errors?.text && <FormError errors={errors?.text} />}
        </div>
        <div className="create-post__images">
          <h1 className="create-post__images-title">Картинки:</h1>
          <input
            {...register('images')}
            type="file"
            accept=".jpg, .jpeg, .png .webp"
            id="images-id"
            multiple
            onChange={handleUploadImages}
          />
          <label
            className={`create-post__images-label ${
              countImages > 0 && 'create-post__images-upload'
            }`}
            htmlFor="images-id">
            {countImages > 0 ? (
              <span className="create-post__images-text">
                {countImages === 1
                  ? 'Прикреплена 1 картинка'
                  : countImages <= 5
                  ? `Прикреплены ${countImages} картинки`
                  : `Прикреплены ${countImages} картинок`}
              </span>
            ) : (
              <>
                <img src="/img/tools-icons/upload.svg" alt="upload" />
                <span className="create-post__images-text">Прикрепить картинки</span>
              </>
            )}
          </label>
        </div>
        <div className="create-post__buttons">
          <div className="create-post__buttons-items">
            <Link to="/blog">
              <Button ClassName="tab">Отмена</Button>
            </Link>
            <Button ClassName="black" Type="submit">
              Опубликовать
            </Button>
          </div>
        </div>
      </div>
      <div className="aside">
        <div className="create-post__style">
          <h3 className="create-post__style-title">{style.name}</h3>
          <div className="create-post__style-items">
            {style.list.map((item) => (
              <div className="create-post__style-item" key={item.id}>
                <input type="radio" id={item.id} {...register('style')} value={item.name} />
                <label htmlFor={item.id}>{item.name}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="create-post__coating">
          <h3 className="create-post__coating-title">{coating.name}</h3>
          <div className="create-post__coating-items"></div>
          {coating.list.map((item) => (
            <div className="create-post__coating-item" key={item.id}>
              <input type="checkbox" id={item.id} {...register('coating')} value={item.name} />
              <label htmlFor={item.id}>{item.name}</label>
            </div>
          ))}
        </div>
        <div className="create-post__decor">
          <h3 className="create-post__decor-title">{decor.name}</h3>
          <div className="create-post__decor-items">
            {decor.list.map((item) => (
              <div className="create-post__decor-item" key={item.id}>
                <input
                  className="create-post__decor-item-input"
                  type="checkbox"
                  id={item.id}
                  {...register('decor')}
                  value={item.name}
                />
                <label className="create-post__decor-item-lable" htmlFor={item.id}>
                  {item.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreatePostForm;
