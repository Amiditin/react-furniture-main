import { useState } from 'react';

function CreatePostFormImages({ register }) {
  const [countImages, setCountImages] = useState(0);

  return (
    <div className="create-post__images">
      <h1 className="create-post__images-title">Картинки:</h1>
      <input
        {...register('images')}
        type="file"
        accept=".jpg, .jpeg, .png .webp"
        id="images-id"
        multiple
        onChange={(event) => setCountImages(event.target.files.length)}
      />
      <label
        className={`create-post__images-label ${countImages > 0 && 'create-post__images-upload'}`}
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
  );
}

export default CreatePostFormImages;
