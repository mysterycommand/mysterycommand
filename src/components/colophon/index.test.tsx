import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Colophon from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Colophon
      name="foo"
      version="1.0.0"
      bugs={{ url: 'https://google.com' }}
      engines={{ node: 'lts/*', npm: 'next' }}
      dependencies={{ es: 'next' }}
      devDependencies={{ ['react-scripts']: 'next' }}
    />,
    div,
  );
  unmountComponentAtNode(div);
});
