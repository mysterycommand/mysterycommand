import { sample } from 'lodash';

const titles = [
  'computer programmer',
  'creative technologist',
  'game maker',
  'software engineer',
  'solutions architect',
  'web developer',
];

const descriptors = [
  'analyst',
  'dabbler',
  'dilettante',
  'generalist',
  'philosopher',
  'tinkerer',
];

// @ts-ignore: 2339
const state = window.__STATE__ as State;
// @ts-ignore: 2339
delete window.__STATE__;

export const initialState: State = state || {
  currentTitle: sample(titles)!, // 'creative technologist', //
  currentDescriptor: sample(descriptors)!, // 'philosopher', //
};

// @ts-ignore: 2339
window.snapSaveState = () => ({ __STATE__: initialState });

export enum ActionType {
  Change,
}

type State = {
  currentTitle: string;
  currentDescriptor: string;
};

type Action = {
  type: ActionType;
};

function getFresh(current: string, pool: string[]): string {
  let fresh = sample(pool)!;

  while (fresh === current) {
    fresh = sample(pool)!;
  }

  return fresh;
}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.Change:
      return {
        currentTitle: getFresh(state.currentTitle, titles),
        currentDescriptor: getFresh(state.currentDescriptor, descriptors),
      };
    default:
      return state;
  }
}
