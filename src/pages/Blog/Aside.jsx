import React from 'react';

import { Link } from 'react-router-dom';

function Aside() {
  return (
    <aside className="aside">
      <div className="aside__search">
        <input className="input" type="text" placeholder="Search" />
        <img className="aside__search-btn" src="/img/search.svg" alt="search" />
      </div>
      <div className="blog__category">
        <h5 className="blog__category-title">Categories</h5>
        <ul className="blog__category-list">
          <li className="blog__category-item">Dining room (1)</li>
          <li className="blog__category-item">Office furniture (12)</li>
          <li className="blog__category-item">Simple interiror design (2)</li>
          <li className="blog__category-item">Design (4)</li>
          <li className="blog__category-item">Bedroom Furniture (1)</li>
        </ul>
      </div>
      <div className="recent-posts">
        <h5 className="recent-posts__title">Recent Posts</h5>
        <ul className="recent-posts__list">
          <li className="recent-posts__item">
            <span className="recent-posts__item-title">
              Cred selfies edison bulb four dollar toast humblebrag
            </span>
            <span className="recent-posts__item-date">August 10, 2020 | </span>
            <span className="recent-posts__item-author">by Ann Summers</span>
          </li>
          <li className="recent-posts__item">
            <span className="recent-posts__item-title">
              Semiotics fixie four dollar toast, next level woke scenester direct trade photo booth
            </span>
            <span className="recent-posts__item-date">September 30 ,2020 | </span>
            <span className="recent-posts__item-author">by Ann Summers</span>
          </li>
          <li className="recent-posts__item">
            <span className="recent-posts__item-title">
              Cred selfies edison bulb four dollar toast humblebrag
            </span>
            <span className="recent-posts__item-date">May 2, 2020 | </span>
            <span className="recent-posts__item-author">by Ann Summers</span>
          </li>
        </ul>
      </div>
      <div className="blog__tags">
        <h5 className="blog__tags-title">Tags</h5>
        <span className="blog__tags-item">Dining room futniture</span>
        <span className="blog__tags-item">Chair</span>
        <span className="blog__tags-item">Table</span>
        <span className="blog__tags-item">Bedroom</span>
        <span className="blog__tags-item">Office Furniture</span>
      </div>
      <ul className="blog__social">
        <li className="blog__social-item">
          <Link className="blog__social-link" to="/">
            <img className="blog__social-icon" src="img/icons/facebook.svg" alt="icon" />
          </Link>
        </li>
        <li className="blog__social-item">
          <Link className="blog__social-link" to="/">
            <img className="blog__social-icon" src="img/icons/instagram.svg" alt="icon" />
          </Link>
        </li>
        <li className="blog__social-item">
          <Link className="blog__social-link" to="/">
            <img className="blog__social-icon" src="img/icons/pinterest.svg" alt="icon" />
          </Link>
        </li>
        <li className="blog__social-item">
          <Link className="blog__social-link" to="/">
            <img className="blog__social-icon" src="img/icons/whatsapp.svg" alt="icon" />
          </Link>
        </li>
        <li className="blog__social-item">
          <Link className="blog__social-link" to="/">
            <img className="blog__social-icon" src="img/icons/youtube.svg" alt="icon" />
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
