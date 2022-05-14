import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleOpened } from '../redux/overlaySlice';
import { menu } from '../utils/constants';

import Overlay from './Overlay';
import Breadcrumbs from './Breadcrumbs';

function Header() {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <nav className="menu">
            <ul className="menu__list">
              {menu.map((item) => {
                return item.id === 68914271 ? (
                  <NavLink to={item.path} key={item.id}>
                    <img className="header__logo" src="/img/logo.png" alt="logo" />
                  </NavLink>
                ) : (
                  <NavLink
                    className={({ isActive }) =>
                      `menu__list-item ${isActive && 'menu__list-item--active'}`
                    }
                    key={item.id}
                    to={item.path}>
                    <span>{item.name}</span>
                  </NavLink>
                );
              })}
              <img
                className="header__icon-login"
                src="/img/tools-icons/icon-login.svg"
                alt="login"
                onClick={() => dispatch(toggleOpened())}
              />
            </ul>
          </nav>
          <Overlay />
        </div>
      </div>
      <Breadcrumbs />
    </header>
  );
}

export default Header;
