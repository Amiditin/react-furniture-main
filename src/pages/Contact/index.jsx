import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Collection from '../../components/Collection';
import { social } from '../../utils/constants';

function Contact() {
  const handleOnClickSend = () => {
    console.log('Send');
  };

  return (
    <main className="main">
      <div className="map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A5dc91f8a5b68dd6326fd95a05f9c7ac44ece0906e577dcea7685b84d93e4be0f&amp;source=constructor"
          title="My map"
          width="100%"
          height="580"
          frameBorder="0"
        />
      </div>
      <section className="contact">
        <div className="container">
          <h3 className="contact__title">Contact Us</h3>
          <div className="contact__content">
            <ul className="contact__social">
              {social.map((network) => (
                <li className="contact__social-item" key={network.id}>
                  <a className="contact__social-link" href={network.linkUrl}>
                    <img
                      className="contact__social-icon"
                      src={network.iconUrl}
                      alt={network.name}
                      target="_blank"
                      rel="noreferrer"
                    />
                  </a>
                </li>
              ))}
            </ul>
            <p className="contact__text">
              Vexillologist vape microdosing freegan pork belly deep v direct trade cray
              single-origin coffee street art. Viral shaman mustache master cleanse, pour-over
              affogato poutine copper mug marfa fanny pack normcore. Lo-fi pop-up banjo portland,
              echo park hammock
            </p>
            <a className="contact__phone" href="tel:+79290497921">
              (929) 049-7921
            </a>
            <div className="contact__street">Green St</div>
            <div className="contact__city">San Francisco, California(CA), 94133</div>
            <a className="contact__info-email" href="mailto:ouremailaddress@email.com">
              <img src="/img/tools-icons/envelope.svg" alt="envelope" />
              ouremailaddress@email.com
            </a>
            <div className="contact__form">
              <div className="contact__inputs">
                <Input placeholder="Your name" type="text" />
                <Input placeholder="Your e-mail" type="email" />
              </div>
              <textarea className="textarea" placeholder="Your message" />
              <Button ClassName="black" onClick={handleOnClickSend}>
                Send
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Collection />
    </main>
  );
}

export default Contact;
