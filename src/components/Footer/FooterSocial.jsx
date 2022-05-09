import { social } from '../../utils/constants';

function FooterSocial() {
  return (
    <ul className="footer__social">
      {social.map((network) => (
        <li className="footer__social-item" key={network.id}>
          <a
            className="footer__social-link"
            href={network.linkUrl}
            target="_blank"
            rel="noreferrer">
            <img className="footer__social-img" src={network.iconUrl} alt={network.name} />
            {network.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FooterSocial;
