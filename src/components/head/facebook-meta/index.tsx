import React, { FC } from 'react';

const FACEBOOK_ID = '163000679';

const FacebookMeta: FC<{
  title: string;
  imagePath: string;
  imageAlt: string;
}> = ({ title, imagePath, imageAlt }) => (
  <>
    <meta property="fb:admins" content={FACEBOOK_ID} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={title} />
    <meta property="og:image" content={imagePath} />
    <meta property="og:image:alt" content={imageAlt} />
    <meta property="og:locale" content="en_US" />
  </>
);

export default FacebookMeta;
