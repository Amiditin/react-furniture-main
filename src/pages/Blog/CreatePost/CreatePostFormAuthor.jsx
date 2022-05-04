import { useState } from 'react';
import FormError from '../../../components/FormError';

function CreatePostFormAuthor({ register, errors }) {
  const [editAuthor, setEditAuthor] = useState(true);

  return (
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
          })}
          disabled={editAuthor}
        />
      </div>
      {errors?.author && <FormError errors={errors?.author} />}
    </div>
  );
}

export default CreatePostFormAuthor;
