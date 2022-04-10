import React from 'react';
import classNames from 'classnames';

function Slide({ title, current }) {
  return (
    <div className={classNames('slide', { 'slide-invisible': !current })}>
      <img className="slide__background" src="/img/content/background.jpg" alt="background" />
      <div className="slide__item">
        <img className="slide__img" src="/img/content/slider-img.png" alt="img" />
        <div className="slide__info">
          <h2 className="slide__title">{title}</h2>
          <p className="slide__text">
            Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic
            lyft ethical drinking vinegar austint
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slide;
