import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Head from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Head
      author="Chonk McChunk"
      handle="@chonky_boi"
      titles={['chief chunker', 'senior associate chonk']}
      descriptors={['distinguished', 'refined', 'elegant']}
    />,
    div,
  );
  unmountComponentAtNode(div);
});
