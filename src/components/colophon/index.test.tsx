import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Colophon from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Colophon />, div);
  unmountComponentAtNode(div);
});
