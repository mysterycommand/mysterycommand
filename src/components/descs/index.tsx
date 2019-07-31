import React, { FC } from 'react';

import './style.css';

import Hlist from '../hlist';

const Descs: FC<{
  currentTitle: string;
  currentDescriptor: string;
}> = ({ currentTitle, currentDescriptor }) => {
  return (
    <Hlist className="descs">
      artist
      {currentTitle}
      {currentDescriptor}
    </Hlist>
  );
};

export default Descs;
