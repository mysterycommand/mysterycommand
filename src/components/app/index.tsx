import React, { FC } from 'react';

import './style.css';

import useAppState from '../../hooks/app-state';
import Head from '../head';
import Hero from '../hero';
import Colophon from '../colophon';

const App: FC = () => {
  const {
    meta: { author, handle },
    titles,
    currentTitle,
    descriptors,
    currentDescriptor,
    package: { name, version, bugs, engines, dependencies, devDependencies },
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
        <Hero
          author={author}
          handle={handle}
          currentTitle={currentTitle}
          currentDescriptor={currentDescriptor}
        />
        <Colophon
          name={name}
          version={version}
          bugs={bugs}
          engines={engines}
          dependencies={dependencies}
          devDependencies={devDependencies}
        />
      </div>
    </>
  );
};

export default App;
