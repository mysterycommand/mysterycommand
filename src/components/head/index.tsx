import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

const Head: FC<{
  meta: {
    author: string;
    handle: string;
  };
  titles: string[];
  descriptors: string[];
}> = ({ meta: { author, handle }, titles, descriptors }) => {
  const title = `${author} is ${handle}`;

  const descs = titles.concat(descriptors);
  const description = `artist, ${descs.join(', ')}`;
  const shortDescription = () => {
    let shortDescs = descs;
    let desc = `artist, ${shortDescs.join(', ')}, etc…`;
    while (desc.length > 200) {
      shortDescs.pop();
      desc = `artist, ${shortDescs.join(', ')}, etc…`;
    }
    return desc;
  };

  const { origin, pathname } = window.location;
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
        <meta name="description" content={description} />

        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image('facebook')} />
        <meta property="og:image:alt" content={imageAlt} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content={author} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={handle} />
        <meta name="twitter:creator" content={handle} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={`${shortDescription}`} />
        <meta name="twitter:image" content={image('twitter')} />
        <meta name="twitter:image:alt" content={imageAlt} />
      </Helmet>
    </>
  );
};

export default Head;
