import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import SharedMeta from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <SharedMeta
      homepage="https://mysterycommand.com"
      title="Matt Hayes is @mysterycommand"
      shortDescription={[
        'artist',
        'computer programmer',
        'creative technologist',
        'game maker',
        'software engineer',
        'solutions architect',
        'web developer',
        'analyst',
        'dabbler',
        'dilettante',
        'generalist',
        'philosopher',
        'tinkerer',
        'etc…',
      ].join(', ')}
    />,
    div,
  );
  unmountComponentAtNode(div);
});
