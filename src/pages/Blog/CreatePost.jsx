import React from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { database, storage } from '../../firebase-config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import CyrillicToTranslit from 'cyrillic-to-translit-js';

import CreatePostForm from './CreatePostForm';

function CreatePost({ getCurrentDate }) {
  const cyrillicToTranslit = new CyrillicToTranslit();
  const isAuth = localStorage.getItem('isAuth') === 'true';

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
    }).then(console.log('Отправил на firestore'), data);
  };

  const handleCreatePost = async (data) => {
    const name = cyrillicToTranslit.transform(data.title, '-').toLowerCase().replace('%', '');

    await uploadImages(data.images, name).then((imgs) => {
      data.images = imgs;
      addCreatePost(data, name);
    });
  };

  return (
    <main className="main">
      <div className="container">
        {isAuth ? (
          <section className="create-post">
            <h1 className="create-post__main-title">Создать пост</h1>
            <CreatePostForm createPost={handleCreatePost} />
          </section>
        ) : (
          <p className="d">Pls login</p>
        )}
      </div>
    </main>
  );
}

export default CreatePost;
