function CreatePostError({ errors }) {
  return (
    <span className="create-post__error">
      <img src="/img/tools-icons/error.svg" alt="error" />
      {errors?.message}
    </span>
  );
}

export default CreatePostError;
