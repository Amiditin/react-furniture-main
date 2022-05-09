import { Link } from 'react-router-dom';

import { menu } from '../../utils/constants';

function FooterMenu() {
  const createNewMenu = () => {
    let newMenu = [...menu];

    [newMenu[0], newMenu[2]] = [newMenu[2], newMenu[0]];
    [newMenu[1], newMenu[2]] = [newMenu[2], newMenu[1]];

    return newMenu;
  };

  return (
    <nav className="footer__menu">
      <ul className="footer__menu-list">
        {menu &&
          createNewMenu().map((item) => (
            <li className="footer__menu-item" key={item.id}>
              <Link className="footer__menu-link" to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default FooterMenu;
