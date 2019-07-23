import React, { FC, useState, useEffect } from 'react';

import './style.css';

const Splash: FC = () => {
  const [Component, setComponent] = useState();

  useEffect(() => {
    import('../boxes').then(({ default: Boxes }) => {
      setComponent(Boxes);
    });
  }, [Component]);

  return <div className="splash">{Component}</div>;
};

export default Splash;
