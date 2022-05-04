import FormError from '../../../components/FormError';

function CreatePostFormInput({ register, errors }) {
  return (
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
  );
}

export default CreatePostFormInput;
