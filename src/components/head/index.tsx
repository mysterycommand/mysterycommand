import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import { homepage } from '../../../package.json';

const FACEBOOK_ID = '163000679';

function getShortDescription(descs: string[]): string {
  let temp = descs;
  let shortDescription;

  while ((shortDescription = temp.concat('etc…').join(', ')).length > 200) {
    temp.pop();
  }

  return shortDescription;
}

const { pathname, href } = window.location;
const { origin } = new URL(
  process.env.NODE_ENV === 'production' ? homepage : href,
);
function getImagePath(network: string): string {
  return `${origin}/screenshots/${network}/${
    pathname === '/' ? 'index.png' : pathname.replace('html', 'png')
  }`;
}

const Head: FC<{
  author: string;
  handle: string;
  titles: string[];
  descriptors: string[];
}> = ({ author, handle, titles, descriptors }) => {
  const title = `${author} is ${handle}`;

  const descs = ['artist'].concat(titles, descriptors);
  const longDescription = descs.join(', ');
  const shortDescription = getShortDescription(descs);

  const imageAlt = `a screenshot of ${author}'${
    author.endsWith('s') ? '' : 's'
  } website`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="author" content={author} />
        <meta name="description" content={longDescription} />
        <link rel="canonical" href={homepage} />

        {/* SharedMeta */}
        <meta property="og:url" content={homepage} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={shortDescription} />

        {/* FacebookMeta */}
        <meta property="fb:admins" content={FACEBOOK_ID} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={getImagePath('facebook')} />
        <meta property="og:image:alt" content={imageAlt} />
        <meta property="og:locale" content="en_US" />

        {/* TwitterMeta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={handle} />
        <meta name="twitter:creator" content={handle} />
        <meta name="twitter:image" content={getImagePath('twitter')} />
        <meta name="twitter:image:alt" content={imageAlt} />
      </Helmet>
    </>
  );
};

export default Head;
