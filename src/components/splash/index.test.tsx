import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Splash from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Splash />, div);
  unmountComponentAtNode(div);
});
