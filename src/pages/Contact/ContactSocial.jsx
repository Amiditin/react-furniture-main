import { social } from '../../utils/constants';

function ContactSocial() {
  return (
    <ul className="contact__social">
      {social.map((network) => (
        <li className="contact__social-item" key={network.id}>
          <a
            className="contact__social-link"
            href={network.linkUrl}
            target="_blank"
            rel="noreferrer">
            <img
              className="contact__social-icon"
              src={network.iconUrl}
              alt={network.name}
              title={network.title}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ContactSocial;
