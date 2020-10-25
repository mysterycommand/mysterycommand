import React from 'react';
import { hydrate, render } from 'react-dom';

import './style.css';
import App from './components/app';

const rootEl = document.getElementById('root');
(rootEl && rootEl.hasChildNodes() ? hydrate : render)(<App />, rootEl);
