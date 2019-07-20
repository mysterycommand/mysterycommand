import React, { FC } from 'react';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { sample } from 'lodash';
import './style.css';

const App: FC = () => (
  <div className="app">
    <header>
      <h1>Matt Hayes is</h1>
      <h1>@mysterycommand</h1>
      <ul>
        <li>artist</li>
        <li>
          {sample([
            'creative technologist',
            'game maker',
            'software engineer',
            'web developer',
          ])}
        </li>
        <li>
          {sample([
            'dabbler',
            'dilettante',
            'generalist',
            'programmer',
            'tinkerer',
          ])}
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://github.com/mysterycommand/" title="GitHub">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/mysterycommand/" title="Twitter">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mysterycommand/"
            title="Linkedin"
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </header>
  </div>
);

export default App;
