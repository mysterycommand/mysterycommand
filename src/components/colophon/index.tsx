import React, { FC, AnchorHTMLAttributes } from 'react';

import './style.css';

import {
  name,
  version,
  bugs,
  license,
  engines,
  dependencies,
  devDependencies,
} from '../../../package.json';
import Hlist from '../hlist';

const links: {
  props: AnchorHTMLAttributes<HTMLAnchorElement>;
  text: string;
}[] = Object.entries({
  ...engines,
  ...dependencies,
  ...devDependencies,
}).map(([key, value]) => ({
  props: {
    href:
      key === 'node'
        ? `https://nodejs.org/dist/v${value}/docs/api/`
        : `https://www.npmjs.com/package/${key}`,
    title: `${key}@${value}`,
    rel: 'external',
  },
  text: key,
}));

const Colophon: FC<{ author: string; handle: string }> = ({
  author,
  handle,
}) => (
  <footer className="colophon">
    <h2>
      <pre>colophon</pre>
    </h2>
    <p>
      this site has been lovingly crafted by
      <a href={`https://github.com/${handle.substring(1)}`}>{author}</a>(
      <a href={`https://twitter.com/${handle.substring(1)}`}>{handle}</a>) you
      may
      <a
        href={`https://github.com/mysterycommand/${name}/tree/v${version}`}
        title={`mysterycommand/${name}@${version}`}
        rel="external"
      >
        view the source
      </a>
      at your leisure, and if you see a bug or a typo please be so kind as to
      <a href={bugs.url} title="see a bug? create an issue!" rel="external">
        create an issue
      </a>
    </p>
    <div>
      this project would not be possible without the work of these fine open
      source projects:
      <Hlist>
        {links.map(({ props, text }) => (
          <a key={props.title} {...props}>
            {text}
          </a>
        ))}
      </Hlist>
    </div>
    <div>
      copyright © {new Date().getFullYear()} {author}, licensed:
      <Hlist className="licenses">
        {license
          .substring(1, license.length - 1)
          .split(' OR ')
          .map(lic => (
            <a
              key={lic}
              href={`https://github.com/mysterycommand/${name}/blob/v${version}/LICENSE-${lic}`}
              title={lic}
              rel="external"
            >
              {lic}
            </a>
          ))}
      </Hlist>
    </div>
  </footer>
);

export default Colophon;
