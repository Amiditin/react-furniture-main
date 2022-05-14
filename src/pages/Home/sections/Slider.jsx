import { useEffect, useState } from 'react';
import { slides } from '../../../utils/constants';

function Slider() {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      activeSlide === 2 ? setActiveSlide(0) : setActiveSlide(activeSlide + 1);
    }, 10000);
    return () => clearInterval(timer);
  });

  return (
    <section className="top">
      <div className="top__inner">
        <div className="top__slider">
          {slides.map((slide, index) => (
            <div className={`slide ${activeSlide !== index && 'slide-invisible'}`} key={index}>
              <img className="slide__background" src={slide.bgUrl} alt="background" />
              <div className="slide__item">
                <div className="slide__img">
                  <img src={slide.imgUrl} alt="img" />
                </div>
                <div className="slide__info">
                  <h2 className="slide__title">{slide.title}</h2>
                  <p className="slide__text">{slide.text}</p>
                </div>
              </div>
            </div>
          ))}
          <ul className="top__slider-dots">
            {Array.from({ length: 3 }, (_, index) => (
              <li className="top__slider-dot" key={index}>
                <button
                  className={`top__slider-btn ${activeSlide === index && 'top__slider-active'}`}
                  onClick={() => setActiveSlide(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Slider;
