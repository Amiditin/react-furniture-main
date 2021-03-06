import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState();
  const [offset, setOffset] = useState();
  const location = useLocation();
  const imgWidth = 730;

  useEffect(() => {
    setCurrentIndex(1);
    setOffset(0);
  }, [location]);

  const handleOnClickArrowLeft = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + imgWidth;
      return newOffset > 0 ? -imgWidth * (images.length - 1) : newOffset;
    });
    setCurrentIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return newIndex < 1 ? images.length : newIndex;
    });
  };

  const handleOnClickArrowRight = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - imgWidth;
      return newOffset < -imgWidth * (images.length - 1) ? 0 : newOffset;
    });
    setCurrentIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return newIndex > images.length ? 1 : newIndex;
    });
  };

  return (
    <div className="carousel">
      {images.map((img, index) => (
        <img
          className="carousel__img"
          src={img}
          alt="img"
          key={index}
          style={{ transform: `translateX(${offset}px)` }}
        />
      ))}
      <div className="carousel__arrow-left" onClick={handleOnClickArrowLeft}>
        <img src="/img/tools-icons/arrow-big-left.svg" alt="prev" />
      </div>
      <div className="carousel__arrow-right" onClick={handleOnClickArrowRight}>
        <img src="/img/tools-icons/arrow-big-right.svg" alt="next" />
      </div>
      <span className="carousel__count">{`${currentIndex}/${images.length}`}</span>
    </div>
  );
}

export default Carousel;
