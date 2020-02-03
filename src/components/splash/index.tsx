import React, { FC, useState, useEffect } from 'react';

import './style.css';

const Splash: FC = () => {
  const [AsyncComponent, setAsyncComponent] = useState();

  useEffect(() => {
    import('./boxes').then(({ default: Boxes }) => {
      setAsyncComponent(Boxes);
    });
  }, []);

  return <div className="splash">{AsyncComponent}</div>;
};

export default Splash;
