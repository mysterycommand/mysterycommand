import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Colophon from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Colophon author="Chonk McChunk" handle="@chonky_boi" />, div);
  unmountComponentAtNode(div);
});
