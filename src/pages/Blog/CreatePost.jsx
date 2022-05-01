import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleOpened } from '../../redux/overlaySlice';
import { addCreatePost } from '../../redux/postsSlice';
import { getCurrentDate } from '../../utils/scripts';
import CyrillicToTranslit from 'cyrillic-to-translit-js';

import CreatePostForm from './CreatePostForm';
import Button from '../../components/Button';

function CreatePost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cyrillicToTranslit = new CyrillicToTranslit();
  const { user } = useSelector((state) => state.auth);

  const handleCreatePost = (data) => {
    const name = cyrillicToTranslit.transform(data.title, '-').toLowerCase().replace('%', '');
    dispatch(
      addCreatePost({
        authorUid: user.uid,
        date: getCurrentDate(),
        name: name,
        comments: [],
        ...data,
      }),
    );
    navigate(`/blog/${name}`);
  };

  return (
    <main className="main">
      <div className="container">
        <section className="create-post">
          {user ? (
            <div className="create-post__main">
              <h1 className="create-post__main-title">Создать пост</h1>
              <CreatePostForm createPost={handleCreatePost} />
            </div>
          ) : (
            <div className="create-post__authorization">
              <h1 className="create-post__authorization-title">Ошибка авторизации</h1>
              <p className="create-post__authorization-text">
                Для создания постов необходимо авторизоваться!
              </p>
              <Button ClassName="tab" onClick={() => dispatch(toggleOpened())}>
                Авторизоваться
              </Button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default CreatePost;
