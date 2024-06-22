import './Links.scss';
import { links } from '../../vars/links';

const Links = () => {
  return (
    <div class="link-list">
      {links.map((link) => (
        <a href={link.url} target="_blank" class="link-list__item">
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default Links;
