import React from 'react';
import { Link } from 'react-router-dom';

function Collection() {
  return (
    <div className="container-fluid">
      <div className="collection">
        {Array.from({ length: 5 }, (_, index) => {
          return (
            <Link to="/" className="collection__item" key={index}>
              <img
                className="collection__img"
                src={`/img/content/collection-${index + 1}.jpg`}
                alt={`collection-${index + 1}`}
              />
              <div className="collection__info">
                <h6 className="collection__info-title">Truffaut literally trust</h6>
                <p className="collection__info-text">Living room furntiture | Chair</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Collection;
