import React, { FC, useState, useEffect } from 'react';

import './style.css';

const Splash: FC = () => {
  const [AsyncComponent, setAsyncComponent] = useState();

  useEffect(() => {
    if (
      process.env.NODE_ENV === 'production' &&
      navigator.userAgent === 'ReactSnap'
    ) {
      return;
    }

    import('./boxes').then(({ default: Boxes }) => {
      setAsyncComponent(Boxes);
    });
  }, []);

  return <div className="splash">{AsyncComponent}</div>;
};

export default Splash;
