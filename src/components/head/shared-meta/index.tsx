import React, { FC } from 'react';

const SharedMeta: FC<{
  homepage: string;
  title: string;
  shortDescription: string;
}> = ({ homepage, title, shortDescription }) => (
  <>
    <meta property="og:url" content={homepage} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={shortDescription} />
  </>
);

export default SharedMeta;
