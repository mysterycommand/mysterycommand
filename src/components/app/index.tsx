import React, { FC } from 'react';

import './style.css';

import useAppState from '../../hooks/app-state';
import Descs from '../descs';
import Links from '../links';
import Splash from '../splash';
import Head from '../head';

const App: FC = () => {
  const {
    meta: { author, handle },
    titles,
    currentTitle,
    descriptors,
    currentDescriptor,
  } = useAppState();

  return (
    <>
      <Head
        author={author}
        handle={handle}
        titles={titles}
        descriptors={descriptors}
      />
      <div className="app">
        <Splash />
        <header>
          <h1>{author} is</h1>
          <h1>
            <a href={process.env.PUBLIC_URL}>{handle}</a>
          </h1>
          <Descs
            currentTitle={currentTitle}
            currentDescriptor={currentDescriptor}
          />
          <Links />
        </header>
      </div>
    </>
  );
};

export default App;
