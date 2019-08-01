import React, { FC } from 'react';

import './style.css';

import Descs from '../descs';
import Links from '../links';
import Splash from '../splash';

const Hero: FC<{
  author: string;
  handle: string;
  currentTitle: string;
  currentDescriptor: string;
}> = ({ author, handle, currentTitle, currentDescriptor }) => (
  <header className="hero">
    <Splash />
    <div className="hero-text">
      <h1>{author} is</h1>
      <h1>
        <a href={process.env.PUBLIC_URL}>{handle}</a>
      </h1>
      <Descs
        currentTitle={currentTitle}
        currentDescriptor={currentDescriptor}
      />
      <Links />
    </div>
  </header>
);

export default Hero;
