import React from 'react';

import Collection from '../../components/Collection';
import Partners from '../../components/Partners';

import AboutUs from './sections/AboutUs';
import Inspiration from './sections/Inspiration';

function About() {
  return (
    <main className="main">
      <AboutUs />
      <Collection />
      <Inspiration />
      <Partners />
    </main>
  );
}

export default About;
