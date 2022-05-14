import { Link } from 'react-router-dom';

import GalleryCell from '../../../components/GalleryCell/GalleryCell';

function Gallery() {
  return (
    <div className="gallery">
      <Link to="/gallery">
        <h3 className="gallery__title">Завораживающая галлерея</h3>
      </Link>
      <div className="container-fluid">
        <GalleryCell />
      </div>
    </div>
  );
}

export default Gallery;
