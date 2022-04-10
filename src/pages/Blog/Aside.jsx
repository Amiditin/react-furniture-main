import React from 'react';

import { listСategories } from '../../store/listСategories';
import { social } from '../../store/social';

function Aside() {
  const { style, coating, decor } = listСategories;

  return (
    <aside className="aside">
      <div className="aside__search">
        <input className="input" type="text" placeholder="Search" />
        <img className="aside__search-btn" src="/img/search.svg" alt="search" />
      </div>
      <div className="blog__style">
        <h5 className="blog__style-title">{style.name}</h5>
        <ul className="blog__style-list">
          {style.list.map(({ name, id }) => (
            <li className="blog__style-item" key={id}>
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className="coating">
        <h5 className="coating__title">{coating.name}</h5>
        <ul className="coating__list">
          {coating.list.map(({ name, id }) => (
            <li className="coating__item" key={id}>
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className="blog__decor">
        <h5 className="blog__decor-title">{decor.name}</h5>
        {decor.list.map(({ name, id }) => (
          <span className="blog__decor-item" key={id}>
            {name}
          </span>
        ))}
      </div>
      <ul className="blog__social">
        {social.map((network) => (
          <li className="blog__social-item" key={network.id}>
            <a
              className="blog__social-link"
              href={network.linkUrl}
              target="_blank"
              rel="noreferrer">
              <img className="blog__social-icon" src={network.iconUrl} alt="icon" />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Aside;
