import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Hlist from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Hlist />, div);
  unmountComponentAtNode(div);
});
