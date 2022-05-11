import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function GalleryCell({ count = 1, filter = null, disableButton = () => {} }) {
  const { loading, posts } = useSelector((state) => state.posts);
  const [filtredPosts, setFiltredPosts] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    !loading && setFiltredPosts(posts.filter((post) => (filter ? post.style === filter : true)));
  }, [filter, loading, posts]);

  useEffect(() => {
    let images = [];

    filtredPosts
      .map((post) => {
        return post.images.map((img) => {
          return { url: img, postName: post.name, postTitle: post.title };
        });
      })
      .forEach((array, index) =>
        array.forEach((item, i) => images.push({ id: index + i * filtredPosts.length, ...item })),
      );

    setImages(
      images.sort((prev, next) => {
        if (prev.id < next.id) return -1;
        return 1;
      }),
    );
  }, [filtredPosts]);

  useEffect(() => {
    count * 9 < images.length ? disableButton(false) : disableButton(true);
  }, [count, disableButton, images.length]);

  return (
    <div className="gallery__inner">
      <div className="gallery__items">
        {images.length &&
          Array.from({ length: count }, (_, cell) => {
            return images.slice(9 * cell, 9 * (cell + 1)).map((image, index) => (
              <Link
                className="gallery__item"
                to={`/blog/${image.postName}`}
                key={`${cell}.${index}`}>
                <img
                  className="gallery__img"
                  src={image.url}
                  alt={image.postName}
                  title={image.postTitle}
                />
              </Link>
            ));
          })}
      </div>
    </div>
  );
}

export default GalleryCell;
