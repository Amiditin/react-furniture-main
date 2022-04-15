import React from 'react';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [offset, setOffset] = React.useState(0);

  const imgWidth = 730;

  const handleOnClickArrowLeft = () => {
    setOffset((currentOffset) => {
      let newOffset = currentOffset + imgWidth;

      if (newOffset > 0) {
        newOffset = -imgWidth * (images.length - 1);
      }

      setCurrentIndex((currentIndex) => {
        let newIndex = currentIndex - 1;

        if (newIndex < 1) {
          newIndex = images.length;
        }

        return newIndex;
      });

      return newOffset;
    });
  };

  const handleOnClickArrowRight = () => {
    setOffset((currentOffset) => {
      let newOffset = currentOffset - imgWidth;
      if (newOffset < -imgWidth * (images.length - 1)) {
        newOffset = 0;
      }

      setCurrentIndex((currentIndex) => {
        let newIndex = currentIndex + 1;
        if (newIndex > images.length) {
          newIndex = 1;
        }

        return newIndex;
      });
      return newOffset;
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
