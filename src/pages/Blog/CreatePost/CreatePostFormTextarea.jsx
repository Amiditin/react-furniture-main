import FormError from '../../../components/FormError';

function CreatePostFormTextarea({ register, errors }) {
  return (
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
  );
}

export default CreatePostFormTextarea;
