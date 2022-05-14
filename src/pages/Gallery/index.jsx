import { useState } from 'react';
import { listСategories } from '../../utils/constants';

import GalleryCell from '../../components/GalleryCell/GalleryCell';
import Button from '../../components/Button';

function Gallery() {
  const { style } = listСategories;
  const [countCells, setCountCells] = useState(1);
  const [filter, setFilter] = useState(null);
  const [disabledButton, setDisabledButton] = useState(false);

  const handleOnClickFilter = (name) => {
    setCountCells(1);
    setDisabledButton(false);
    filter === name ? setFilter(null) : setFilter(name);
  };

  return (
    <main className="main">
      <div className="gallery">
        <div className="container-fluid">
          <div className="gallery__btns">
            {style.list.map((item) => {
              return (
                <Button
                  ClassName="tab"
                  key={item.id}
                  onClick={() => handleOnClickFilter(item.name)}
                  active={filter === item.name}>
                  {item.name}
                </Button>
              );
            })}
          </div>
          <GalleryCell count={countCells} filter={filter} disableButton={setDisabledButton} />
          <button
            className={`gallery__show-more ${disabledButton && 'gallery__show-more--disabled'}`}
            onClick={() => setCountCells((currentCountCells) => currentCountCells + 1)}>
            Показать ещё
          </button>
        </div>
      </div>
    </main>
  );
}

export default Gallery;
