import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Head from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Head />, div);
  unmountComponentAtNode(div);
});
