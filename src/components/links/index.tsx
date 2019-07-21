import React, { FC } from 'react';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import './style.css';

const Links: FC = () => (
  <ul className="links">
    {[
      {
        href: 'https://github.com/mysterycommand/',
        title: 'GitHub',
        Icon: FaGithub,
      },
      {
        href: 'https://twitter.com/mysterycommand/',
        title: 'Twitter',
        Icon: FaTwitter,
      },
      {
        href: 'https://www.linkedin.com/in/mysterycommand/',
        title: 'Linkedin',
        Icon: FaLinkedinIn,
      },
    ].map(({ href, title, Icon }) => (
      <li key={`${title}: ${href}`}>
        <a href={href} title={title}>
          <Icon />
        </a>
      </li>
    ))}
  </ul>
);

export default Links;
