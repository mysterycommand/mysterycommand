import { sample } from 'lodash';

import {
  name,
  version,
  bugs,
  engines,
  dependencies,
  devDependencies,
} from '../../../package.json';

const meta = {
  author: 'Matt Hayes',
  handle: '@mysterycommand',
};

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

type KeyValue = {
  [key: string]: string;
};

type State = {
  meta: {
    author: string;
    handle: string;
  };
  titles: string[];
  currentTitle: string;
  descriptors: string[];
  currentDescriptor: string;
  package: {
    name: string;
    version: string;
    bugs: KeyValue;
    engines: KeyValue;
    dependencies: KeyValue;
    devDependencies: KeyValue;
  };
};

export enum ActionType {
  Change,
}

type Action = {
  type: ActionType;
};

// @ts-ignore: 2339
const state = window.__STATE__ as State;
// @ts-ignore: 2339
delete window.__STATE__;

export const initialState: State = state || {
  meta,
  titles,
  currentTitle: sample(titles)!, // 'computer programmer', //
  descriptors,
  currentDescriptor: sample(descriptors)!, // 'philosopher', //
  package: {
    name,
    version,
    bugs,
    engines,
    dependencies,
    devDependencies,
  },
};

// @ts-ignore: 2339
window.snapSaveState = () => ({ __STATE__: initialState });

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
        ...state,
        currentTitle: getFresh(state.currentTitle, titles),
        currentDescriptor: getFresh(state.currentDescriptor, descriptors),
      };
    default:
      return state;
  }
}
