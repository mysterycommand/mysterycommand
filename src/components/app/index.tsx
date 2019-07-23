import React, { FC } from 'react';

import './style.css';

import Descs from '../descs';
import Links from '../links';

const App: FC = () => (
  <div className="app">
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

export default App;
