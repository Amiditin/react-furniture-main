import { contacts } from '../../utils/constants';
import FooterForm from './FooterForm';
import FooterMenu from './FooterMenu';
import FooterSocial from './FooterSocial';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__info">
              <h6 className="footer__info-title">Контакты</h6>
              <p className="footer__info-text">
                Если у вас отались вопросы, то напишите нам, ответим в ближайшее время!
              </p>
              <a className="footer__info-email" href="mailto:ouremailaddress@email.com">
                <img src="/img/tools-icons/envelope.svg" alt="envelope" />
                {contacts.email}
              </a>
              <FooterForm />
            </div>
            <FooterSocial />
            <FooterMenu />
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <p>{contacts.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
