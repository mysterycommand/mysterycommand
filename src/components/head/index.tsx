import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import { homepage } from '../../../package.json';

const FACEBOOK_ID = '163000679';

const Head: FC<{
  author: string;
  handle: string;
  titles: string[];
  descriptors: string[];
}> = ({ author, handle, titles, descriptors }) => {
  const title = `${author} is ${handle}`;

  const descs = titles.concat(descriptors);
  const longDescription = `artist, ${descs.join(', ')}`;
  const shortDescription = (() => {
    let shortenedDescs = descs;
    let description = `artist, ${shortenedDescs.join(', ')}, etc…`;
    while (description.length > 200) {
      shortenedDescs.pop();
      description = `artist, ${shortenedDescs.join(', ')}, etc…`;
    }
    return description;
  })();

  const { origin } = new URL(
    process.env.NODE_ENV === 'production' ? homepage : window.location.href,
  );
  const { pathname } = window.location;
  const image = (network: string) =>
    `${origin}/screenshots/${network}/${
      pathname === '/' ? 'index.png' : pathname.replace('html', 'png')
    }`;
  const imageAlt = `a screenshot of ${author}'${
    author.endsWith('s') ? '' : 's'
  } website`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="author" content={author} />
        <meta name="description" content={longDescription} />

        {/* Facebook */}
        <meta property="fb:admins" content={FACEBOOK_ID} />
        <meta property="og:url" content={homepage} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image('facebook')} />
        <meta property="og:image:alt" content={imageAlt} />
        <meta property="og:description" content={shortDescription} />
        <meta property="og:site_name" content={title} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:url" content={homepage} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={handle} />
        <meta name="twitter:creator" content={handle} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={shortDescription} />
        <meta name="twitter:image" content={image('twitter')} />
        <meta name="twitter:image:alt" content={imageAlt} />
      </Helmet>
    </>
  );
};

export default Head;
