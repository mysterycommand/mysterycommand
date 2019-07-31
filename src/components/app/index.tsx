import React, { FC, useReducer } from 'react';

import './style.css';

import { initialState, reducer } from '../../reducer';
import Descs from '../descs';
import Links from '../links';
import Splash from '../splash';

const App: FC = () => {
  const [{ titles, descriptors }] = useReducer(reducer, initialState);
  console.log(titles, descriptors);

  return (
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
  );
};

export default App;
