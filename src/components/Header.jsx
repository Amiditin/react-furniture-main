import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { menu } from '../store/menu';

import Overlay from './Overlay';
import Breadcrumbs from './Breadcrumbs';

function Header() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
                  <NavLink to={item.path} key={item.id}>
                    <img className="header__logo" src="/img/logo.png" alt="logo" />
                  </NavLink>
                ) : (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'menu__list-item menu__list-active' : 'menu__list-item'
                    }
                    key={item.id}
                    to={item.path}>
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
      {pathname === '/' ? false : <Breadcrumbs pathname={pathname} />}
    </header>
  );
}

export default Header;
