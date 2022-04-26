import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleOpened } from '../../redux/overlaySlice';
import { Link } from 'react-router-dom';
import { database, storage } from '../../utils/firebase-config';
import { getCurrentDate } from '../../utils/scripts';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import CyrillicToTranslit from 'cyrillic-to-translit-js';

import CreatePostForm from './CreatePostForm';
import Button from '../../components/Button';

function CreatePost() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [publishProcess, setPublishProcess] = useState(false);
  const [publishProcessTitle, setPublishProcessTitle] = useState('Загружаем пост');
  const [publishProcessText, setPublishProcessText] = useState([]);
  const cyrillicToTranslit = new CyrillicToTranslit();

  const uploadImages = async (images, name) => {
    const imgs = [];

    for (let i = 0; i < images.length; i++) {
      const storageRef = ref(storage, `/blog-posts-img/${name}/${images[i].name}`);

      await uploadBytes(storageRef, images[i]).then(async (snapshot) => {
        await getDownloadURL(snapshot.ref).then((url) => imgs.push(url));
      });
    }

    return imgs;
  };

  const addCreatePost = async (data, name) => {
    await addDoc(collection(database, 'blog-posts'), {
      date: getCurrentDate(),
      comments: [],
      name: name,
      ...data,
    }).then(() => {
      setPublishProcessTitle('Пост опубликован!');
      console.log('Отправил на firestore');
    });
  };

  const handleCreatePost = async (data) => {
    const name = cyrillicToTranslit.transform(data.title, '-').toLowerCase().replace('%', '');
    setPublishProcess(true);

    await uploadImages(data.images, name).then((imgs) => {
      data.images = imgs;
      addCreatePost(data, name);
    });
  };

  return (
    <main className="main">
      <div className="container">
        <section className="create-post">
          {publishProcess ? (
            <div className="create-post__publish-process">
              <h1 className="create-post__main-title">{publishProcessTitle}</h1>
              {publishProcessText.map((text, index) => (
                <p className="create-post__publish-process-text" key={index}>
                  {text}
                </p>
              ))}
              {publishProcessTitle === 'Пост опубликован!' && (
                <Link to="/blog">
                  <Button ClassName="tab">Готово</Button>
                </Link>
              )}
            </div>
          ) : user ? (
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
