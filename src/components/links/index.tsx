import React, { FC, AnchorHTMLAttributes } from 'react';
import { FaGithub, FaTwitter, FaLinkedinIn, FaFilePdf } from 'react-icons/fa';
import { IconType } from 'react-icons/lib/esm';

import Hlist from '../hlist';

const links: {
  props: AnchorHTMLAttributes<HTMLAnchorElement>;
  Icon: IconType;
}[] = [
  {
    props: {
      href: 'https://github.com/mysterycommand/',
      title: 'GitHub',
      rel: 'external',
    },
    Icon: FaGithub,
  },
  {
    props: {
      href: 'https://twitter.com/mysterycommand/',
      title: 'Twitter',
      rel: 'external',
    },
    Icon: FaTwitter,
  },
  {
    props: {
      href: 'https://www.linkedin.com/in/mysterycommand/',
      title: 'Linkedin',
      rel: 'external',
    },
    Icon: FaLinkedinIn,
  },
  {
    props: {
      href: `${process.env.PUBLIC_URL}/resume.pdf`,
      title: 'My resume (PDF)',
      download: 'Matt-Hayes-Resume.pdf',
      type: 'application/pdf',
      rel: 'author',
    },
    Icon: FaFilePdf,
  },
];

const Links: FC = () => (
  <Hlist>
    {links.map(({ props, Icon }) => {
      const { title, href } = props;
      return (
        <a key={`${title}: ${href}`} {...props}>
          <Icon />
        </a>
      );
    })}
  </Hlist>
);

export default Links;
