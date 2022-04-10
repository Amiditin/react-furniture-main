import classNames from 'classnames';
import React from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';

import Overlay from './Overlay';
import Breadcrumbs from './Breadcrumbs';

function Header() {
  const menu = [
    { id: 1, name: 'About' },
    { id: 2, name: 'Gallery' },
    { id: 3, name: 'Home' },
    { id: 4, name: 'Blog' },
    { id: 5, name: 'Contact' },
  ];

  const location = useLocation();

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
              {menu.map((item) => {
                return item.id === 3 ? (
                  <NavLink to="/" key={item.id}>
                    <img className="header__logo" src="/img/logo.png" alt="logo" />
                  </NavLink>
                ) : (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'menu__list-item menu__list-active' : 'menu__list-item'
                    }
                    key={item.id}
                    to={`/${item.name}`.toLowerCase()}>
                    <span>{item.name}</span>
                  </NavLink>
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
