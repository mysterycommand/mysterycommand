import React, { FC, useReducer } from 'react';
import { Helmet } from 'react-helmet';

import './style.css';

import { initialState, reducer } from '../../reducer';
import Descs from '../descs';
import Links from '../links';
import Splash from '../splash';

const App: FC = () => {
  const [
    {
      meta: { author, handle },
      titles,
      descriptors,
    },
  ] = useReducer(reducer, initialState);

  return (
    <>
      <Helmet>
        <title>
          {author} is {handle}
        </title>
        <meta name="author" content={author} />
        <meta
          name="description"
          content={`artist, ${titles.join(', ')}, ${descriptors.join(', ')}`}
        />
      </Helmet>
      <div className="app">
        <Splash />
        <header>
          <h1>Matt Hayes is</h1>
          <h1>
            <a href={process.env.PUBLIC_URL}>@mysterycommand</a>
          </h1>
          <Descs />
          <Links />
        </header>
      </div>
    </>
  );
};

export default App;
