import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import FacebookMeta from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <FacebookMeta
      title="Matt Hayes is @mysterycommand"
      imagePath="https://mysterycommand.com/screenshots/twitter/index.png"
      imageAlt="a screenshot of Matt Hayes' website"
    />,
    div,
  );
  unmountComponentAtNode(div);
});
