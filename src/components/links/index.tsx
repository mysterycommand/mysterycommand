import React, { FC } from 'react';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import './style.css';

import Hlist from '../hlist';

const Links: FC = () => (
  <Hlist>
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
      <a key={`${title}: ${href}`} href={href} title={title}>
        <Icon />
      </a>
    ))}
  </Hlist>
);

export default Links;
