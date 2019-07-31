import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Descs from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Descs currentTitle="chief chunker" currentDescriptor="distinguished" />,
    div,
  );
  unmountComponentAtNode(div);
});
