import classNames from 'classnames';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const { pathname } = useLocation();
  const path = pathname.slice(1).split('/');

  return (
    <>
      {pathname !== '/' && (
        <div
          className={classNames('breadcrumbs', {
            'background-none': path[0] === 'about' || path[0] === 'contact',
          })}>
          <div className="container">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to="/">
                  Home
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/${path[0]}`}>
                  {path[0][0].toUpperCase() + path[0].slice(1)}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Breadcrumbs;
