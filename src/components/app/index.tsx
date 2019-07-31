import React, { FC, useReducer } from 'react';

import './style.css';

import { initialState, reducer } from '../../reducer';
import Descs from '../descs';
import Links from '../links';
import Splash from '../splash';
import Head from '../head';

const App: FC = () => {
  const [state] = useReducer(reducer, initialState);

  const {
    meta: { author, handle },
    // titles,
    // descriptors,
  } = state;

  return (
    <>
      <Head {...state} />
      <div className="app">
        <Splash />
        <header>
          <h1>{author} is</h1>
          <h1>
            <a href={process.env.PUBLIC_URL}>{handle}</a>
          </h1>
          <Descs />
          <Links />
        </header>
      </div>
    </>
  );
};

export default App;
