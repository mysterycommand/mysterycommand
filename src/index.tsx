import React from 'react';
import { hydrate, render } from 'react-dom';

import './style.css';
import App from './components/app';
import * as sw from './service-worker';

const rootEl = document.getElementById('root');
(rootEl && rootEl.hasChildNodes() ? hydrate : render)(<App />, rootEl);

sw.unregister();
