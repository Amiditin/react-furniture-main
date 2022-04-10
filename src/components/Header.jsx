import classNames from 'classnames';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Overlay from './Overlay';
import Breadcrumbs from './Breadcrumbs';

function Header() {
  const menu = ['About', 'Gallery', 'Home', 'Blog', 'Contact'];

  const location = useLocation();
  const path = location.pathname.split('/');

  const [overlayIsOpened, setOverlayIsOpened] = React.useState(false);

  const handleOnClickMenu = () => {
    setOverlayIsOpened(true);
  };

  const handleOnClickClose = () => {
    setOverlayIsOpened(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <nav className="menu">
            <ul className="menu__list">
              {menu.map((item, index) => {
                return item === 'Home' ? (
                  <Link to="/" key={index}>
                    <img className="header__logo" src="/img/logo.png" alt="logo" />
                  </Link>
                ) : (
                  <li className="menu__list-item" key={index}>
                    <Link to={`/${item}`.toLowerCase()}>
                      <span
                        className={classNames('menu__list-link', {
                          'menu__list-cur': path[1] === item.toLowerCase(),
                        })}>
                        {item}
                      </span>
                    </Link>
                  </li>
                );
              })}
              <img
                className="header__iconmenu"
                src="/img/icon-login.svg"
                alt="icon menu"
                onClick={handleOnClickMenu}
              />
            </ul>
          </nav>
          <Overlay opened={overlayIsOpened} onClickClose={handleOnClickClose} />
        </div>
      </div>
      {location.pathname === '/' ? false : <Breadcrumbs location={location} />}
    </header>
  );
}

export default Header;
