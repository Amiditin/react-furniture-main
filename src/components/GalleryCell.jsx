import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function GalleryCell({ cells = 1 }) {
  const [activeTab, setActiveTab] = React.useState(0);

  const ButtonChild = [
    'Bedroom furniture',
    'Living room furniture',
    'Office furniture',
    'Dining room futniture',
    'Chair',
  ];

  return (
    <div className="gallery">
      <div className="container-fluid">
        <div className="gallery__btns">
          {ButtonChild &&
            ButtonChild.map((child, index) => {
              return (
                <Button
                  ClassName="tab"
                  key={index}
                  onClick={() => setActiveTab(index)}
                  active={activeTab === index ? true : false}>
                  {child}
                </Button>
              );
            })}
        </div>
        {Array.from({ length: cells }, (_, index) => {
          return (
            <div className="gallery__inner" key={index}>
              <div className="gallery__items">
                <Link
                  className={classNames('gallery__item', { gallery__big: index % 2 === 0 })}
                  to="/">
                  <img className="gallery__img" src="/img/gallery/1.jpg" alt="img" />
                </Link>
                <Link className="gallery__item" to="/">
                  <img className="gallery__img" src="/img/gallery/2.jpg" alt="img" />
                </Link>
                <Link
                  className={classNames('gallery__item', { gallery__big: index % 2 === 1 })}
                  to="/">
                  <img className="gallery__img" src="/img/gallery/1.jpg" alt="img" />
                </Link>
                <Link className="gallery__item" to="/">
                  <img className="gallery__img" src="/img/gallery/4.jpg" alt="img" />
                </Link>
                <Link className="gallery__item" to="/">
                  <img className="gallery__img" src="/img/gallery/5.jpg" alt="img" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GalleryCell;
