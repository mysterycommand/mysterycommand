import { useEffect, useReducer } from 'react';

import { initialState, reducer, ActionType } from './reducer';

export default function useAppState() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentTitle, currentDescriptor } = state;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch({ type: ActionType.Change });
    }, 2500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentTitle, currentDescriptor]);

  return state;
}
