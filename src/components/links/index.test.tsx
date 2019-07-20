import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Links from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Links />, div);
  unmountComponentAtNode(div);
});
