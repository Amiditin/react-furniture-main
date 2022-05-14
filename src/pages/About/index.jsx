import React from 'react';

import Collection from '../../components/Collection/Collection';
import Technologies from '../../components/Technologies';

import AboutUs from './sections/AboutUs';
import Performance from './sections/Performance';

function About() {
  return (
    <main className="main">
      <AboutUs />
      <Collection />
      <Performance />
      <Technologies />
    </main>
  );
}

export default About;
