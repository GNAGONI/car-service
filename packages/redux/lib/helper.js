import { ignoredActionTypes } from '../constants';

export const requestAction = action =>
  action.type.includes('REQUEST') && ignoredActionTypes.every(ignoredAction => !action.type.includes(ignoredAction));

export const identifyAction = action =>
  action.type
    .split('_')
    .slice(0, -1)
    .join('_');

export const getSuccessType = action => `${identifyAction(action)}_SUCCESS`;
export const getFailType = action => `${identifyAction(action)}_ERROR`;
