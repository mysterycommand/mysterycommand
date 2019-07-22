import React, { Children, FC, HTMLAttributes } from 'react';

import './style.css';

const Hlist: FC<HTMLAttributes<HTMLUListElement>> = ({
  children,
  className,
}) => (
  <ul className={['hlist', className].join(' ')}>
    {Children.map(children, (child, i) => (
      <li key={i}>{child}</li>
    ))}
  </ul>
);

export default Hlist;
