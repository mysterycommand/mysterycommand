import React, { FC } from 'react';

const TwitterMeta: FC<{
  handle: string;
  imagePath: string;
  imageAlt: string;
}> = ({ handle, imagePath, imageAlt }) => (
  <>
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content={handle} />
    <meta name="twitter:creator" content={handle} />
    <meta name="twitter:image" content={imagePath} />
    <meta name="twitter:image:alt" content={imageAlt} />
  </>
);

export default TwitterMeta;
