import React from 'react';

import Collection from '../../components/Collection';
import Technologies from '../../components/Technologies';

import AboutUs from './sections/AboutUs';
import Inspiration from './sections/Inspiration';

function About() {
  return (
    <main className="main">
      <AboutUs />
      <Collection />
      <Inspiration />
      <Technologies />
    </main>
  );
}

export default About;
