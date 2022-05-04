import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listСategories } from '../../../utils/constants/listСategories';

import CreatePostFormAuthor from './CreatePostFormAuthor';
import CreatePostFormInput from './CreatePostFormInput';
import CreatePostFormTextarea from './CreatePostFormTextarea';
import CreatePostFormImages from './CreatePostFormImages';
import CreatePostFormAside from './CreatePostFormAside';
import Button from '../../../components/Button';

function CreatePostForm({ createPost }) {
  const { style } = listСategories;
  const { user } = useSelector((state) => state.auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    defaultValues: { author: user.displayName, style: style.list[0].name, coating: [], decor: [] },
  });

  return (
    <form className="create-post__form" onSubmit={handleSubmit(createPost)}>
      <div className="create-post__content">
        <CreatePostFormAuthor register={register} errors={errors} />
        <CreatePostFormInput register={register} errors={errors} />
        <CreatePostFormTextarea register={register} errors={errors} />
        <CreatePostFormImages register={register} />
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
      <CreatePostFormAside register={register} />
    </form>
  );
}

export default CreatePostForm;
