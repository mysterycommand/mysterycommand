import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import TwitterMeta from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <TwitterMeta
      handle="@mysterycommand"
      imagePath="https://mysterycommand.com/screenshots/twitter/index.png"
      imageAlt="a screenshot of Matt Hayes' website"
    />,
    div,
  );
  unmountComponentAtNode(div);
});
