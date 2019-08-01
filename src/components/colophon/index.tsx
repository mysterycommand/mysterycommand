import React, { FC } from 'react';

import './style.css';

type KeyValue = {
  [key: string]: string;
};

const Colophon: FC<{
  name: string;
  version: string;
  bugs: KeyValue;
  engines: KeyValue;
  dependencies: KeyValue;
  devDependencies: KeyValue;
}> = ({
  name,
  version,
  bugs: { url },
  engines,
  dependencies,
  devDependencies,
}) => (
  <footer className="colophon">
    <h2>
      <pre>
        <code>colophon</code>
      </pre>
    </h2>
    <ul>
      <li>
        <a
          href={`https://github.com/mysterycommand/${name}/tree/v${version}`}
          title={`mysterycommand/${name}@${version}`}
          rel="external"
        >
          <pre>
            <code>view source</code>
          </pre>
        </a>
      </li>
      <li>
        <a href={url} title="see a bug? file an issue!" rel="external">
          <pre>
            <code>file bugs</code>
          </pre>
        </a>
      </li>
    </ul>
    {Object.entries({
      engines,
      dependencies,
      devDependencies,
    }).map(([key, value]) => (
      <div key={`${key}@${value}`}>
        <h3>
          <pre>
            <code>{key}</code>
          </pre>
        </h3>
        <ul>
          {Object.entries(value as { [key: string]: string }).map(
            ([key, value]) => (
              <li key={`${key}@${value}`}>
                <a
                  href={
                    key === 'node'
                      ? `https://nodejs.org/dist/v${value}/docs/api/`
                      : `https://www.npmjs.com/package/${key}`
                  }
                  title={`${key}@${value}`}
                  rel="external"
                >
                  <pre>
                    <code>{key}</code>
                  </pre>
                </a>
              </li>
            ),
          )}
        </ul>
      </div>
    ))}
  </footer>
);

export default Colophon;
