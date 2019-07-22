import React, { FC } from 'react';
import { FaGithub, FaTwitter, FaLinkedinIn, FaFilePdf } from 'react-icons/fa';

import './style.css';

import Hlist from '../hlist';

const Links: FC = () => (
  <Hlist>
    {[
      {
        htmlAnchorProps: {
          href: 'https://github.com/mysterycommand/',
          title: 'GitHub',
          rel: 'external',
        },
        Icon: FaGithub,
      },
      {
        htmlAnchorProps: {
          href: 'https://twitter.com/mysterycommand/',
          title: 'Twitter',
          rel: 'external',
        },
        Icon: FaTwitter,
      },
      {
        htmlAnchorProps: {
          href: 'https://www.linkedin.com/in/mysterycommand/',
          title: 'Linkedin',
          rel: 'external',
        },
        Icon: FaLinkedinIn,
      },
      {
        htmlAnchorProps: {
          href: `${process.env.PUBLIC_URL}/resume.pdf`,
          title: 'My resume (PDF)',
          download: 'Matt-Hayes-Resume.pdf',
          type: 'application/pdf',
          rel: 'author',
        },
        Icon: FaFilePdf,
      },
    ].map(({ htmlAnchorProps, Icon }) => {
      const { title, href } = htmlAnchorProps;
      return (
        <a key={`${title}: ${href}`} {...htmlAnchorProps}>
          <Icon />
        </a>
      );
    })}
  </Hlist>
);

export default Links;
