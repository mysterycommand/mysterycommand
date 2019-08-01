import React, { FC } from 'react';

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
      <Hero
        author={author}
        handle={handle}
        currentTitle={currentTitle}
        currentDescriptor={currentDescriptor}
      />
      {/* <section>content</section> */}
      <Colophon
        name={name}
        version={version}
        bugs={bugs}
        engines={engines}
        dependencies={dependencies}
        devDependencies={devDependencies}
      />
    </>
  );
};

export default App;
