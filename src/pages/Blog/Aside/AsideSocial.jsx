import { social } from '../../../utils/constants';

function AsideSocial() {
  return (
    <ul className="aside__social">
      {social.map((network) => (
        <li className="aside__social-item" key={network.id}>
          <a className="aside__social-link" href={network.linkUrl} target="_blank" rel="noreferrer">
            <img
              className="aside__social-icon"
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

export default AsideSocial;
