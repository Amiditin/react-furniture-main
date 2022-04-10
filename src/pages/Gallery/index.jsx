import React from 'react';

import GalleryCell from '../../components/GalleryCell';

function Gallery() {
  return (
    <main className="main">
      <GalleryCell cells={3} />
    </main>
  );
}

export default Gallery;
