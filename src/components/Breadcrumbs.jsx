import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumbs({ pathname }) {
  const getCurLocation = () => {
    const path = pathname
      .slice(1)
      .split('/')
      .map((item) => {
        return item[0].toUpperCase() + item.slice(1);
      });
    return path;
  };

  const curLocation = getCurLocation();
  const originalPath = curLocation.find((item) => item === 'About' || item === 'Contact');

  return (
    <div
      className={classNames('breadcrumbs', {
        'background-none': originalPath === 'About' || originalPath === 'Contact',
      })}>
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link to="/" className="breadcrumbs__link">
              Home
            </Link>
          </li>
          <li className="breadcrumbs__item">
            {curLocation &&
              curLocation.map((item, index) => {
                return (
                  <Link
                    className="breadcrumbs__link"
                    to={`/${curLocation[0].toLowerCase()}`}
                    key={index}>
                    {index > 0 ? `/ ${item}` : item}
                  </Link>
                );
              })}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
