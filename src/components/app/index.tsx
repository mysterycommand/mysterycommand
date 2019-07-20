import React, { FC, useReducer, useEffect } from 'react';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import './style.css';

import { initialState, reducer, ActionType } from '../../reducer';

const App: FC = () => {
  const [{ currentTitle, currentDescriptor }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch({ type: ActionType.Change });
    }, 2500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentTitle, currentDescriptor]);

  return (
    <div className="app">
      <header>
        <h1>Matt Hayes is</h1>
        <h1>@mysterycommand</h1>
        <ul>
          <li>artist</li>
          <li>{currentTitle}</li>
          <li>{currentDescriptor}</li>
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
};

export default App;
