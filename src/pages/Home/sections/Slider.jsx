import React from 'react';
import classNames from 'classnames';

import Slide from './Slide';

function Slider() {
  const [activeSlide, setActiveSlide] = React.useState(1);

  const slideTitle = ['slide 1', 'slide 2', 'slide 3'];

  React.useEffect(() => {
    const timer = setInterval(() => {
      activeSlide === 2 ? setActiveSlide(0) : setActiveSlide(activeSlide + 1);
    }, 10000);
    return () => clearInterval(timer);
  });

  return (
    <section className="top">
      <div className="top__inner">
        {slideTitle &&
          slideTitle.map((title, index) => (
            <Slide key={index} current={activeSlide === index ? true : false} title={title} />
          ))}
        <div className="top__slider">
          <ul className="top__slider-dots">
            {Array.from({ length: 3 }, (_, index) => {
              return (
                <li className="top__slider-dot" key={index}>
                  <button
                    className={classNames('top__slider-btn', {
                      'top__slider-active': index === activeSlide,
                    })}
                    onClick={() => setActiveSlide(index)}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Slider;
