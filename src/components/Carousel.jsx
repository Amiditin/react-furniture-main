import React from 'react';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [offset, setOffset] = React.useState(0);

  const imgWidth = 730;

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
      <img
        className="carousel__arrow-left"
        src="/img/arrow-big-left.svg"
        alt="arrow"
        onClick={handleOnClickArrowLeft}
      />
      <img
        className="carousel__arrow-right"
        src="/img/arrow-big-right.svg"
        alt="arrow"
        onClick={handleOnClickArrowRight}
      />
      <span className="carousel__count">{`${currentIndex}/${images.length}`}</span>
    </div>
  );
}

export default Carousel;
