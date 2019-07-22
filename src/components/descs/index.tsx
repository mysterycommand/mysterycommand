import React, { FC, useEffect, useReducer } from 'react';

import './style.css';

import { initialState, reducer, ActionType } from '../../reducer';
import Hlist from '../hlist';

function useDescs() {
  const [{ currentTitle, currentDescriptor }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch({ type: ActionType.Change });
    }, 2500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentTitle, currentDescriptor]);

  return [currentTitle, currentDescriptor];
}

const Descs: FC = () => {
  const [currentTitle, currentDescriptor] = useDescs();

  return (
    <Hlist className="descs">
      artist
      {currentTitle}
      {currentDescriptor}
    </Hlist>
  );
};

export default Descs;
