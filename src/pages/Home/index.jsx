import React from 'react';

import GalleryCell from '../../components/GalleryCell';

import Slider from './sections/Slider';
import WorksPath from './sections/WorksPath';
import BlogBox from './sections/BlogBox/BlogBox';
import Decor from './sections/Decor';
import NewCollection from './sections/NewCollection';

function Home() {
  return (
    <main className="main">
      <Slider />
      <NewCollection />
      <Decor />
      <WorksPath />
      <GalleryCell />
      <BlogBox />
    </main>
  );
}

export default Home;
