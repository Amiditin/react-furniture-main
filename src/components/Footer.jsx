import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Input from './Input';

function Footer() {
  const social = [
    { id: 1, imgUrl: '/img/icons/facebook.svg', name: 'Facebook' },
    { id: 2, imgUrl: '/img/icons/instagram.svg', name: 'Instagram' },
    { id: 3, imgUrl: '/img/icons/pinterest.svg', name: 'Pinterest' },
    { id: 4, imgUrl: '/img/icons/whatsapp.svg', name: 'WhatsApp' },
    { id: 5, imgUrl: '/img/icons/youtube.svg', name: 'Youtube' },
  ];

  const menu = [
    { id: 1, name: 'Delivery' },
    { id: 2, name: 'FAQ' },
    { id: 3, name: 'Help' },
    { id: 4, name: 'More About Us' },
  ];

  const textInfo = {
    title: 'Contact Us',
    text: 'Keffiyeh poutine etsy, paleo cray put a bird on it microdosing schlitz you probably occupy',
    email: 'ouremailaddress@email.com',
    copyright: '674 Gonzales Drive. Washington, PA 15301',
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__info">
              <h6 className="footer__info-title">{textInfo.title}</h6>
              <p className="footer__info-text">{textInfo.text}</p>
              <a className="footer__info-email" href="mailto:ouremailaddress@email.com">
                <img src="/img/icons/envelope.svg" alt="envelope" />
                {textInfo.email}
              </a>
              <form className="footer__form">
                <Input placeholder="Subscribe by email" />
                <Button ClassName="black">Send</Button>
              </form>
            </div>
            <ul className="footer__social">
              {social &&
                social.map((obj) => (
                  <li className="footer__social-item" key={obj.id}>
                    <Link to="/" className="footer__social-link">
                      <img src={obj.imgUrl} alt={obj.name} />
                      {obj.name}
                    </Link>
                  </li>
                ))}
            </ul>
            <nav className="footer__menu">
              <ul className="footer__menu-list">
                {menu &&
                  menu.map((obj) => (
                    <li className="footer__menu-item" key={obj.id}>
                      <Link className="footer__menu-link" to="/">
                        {obj.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <p>{textInfo.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
