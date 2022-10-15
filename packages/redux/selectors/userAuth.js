import { createSelector } from 'reselect';

const getUser = state => state.userAuth;

export const isUserAuthenticatedSelector = createSelector(
  getUser,
  user => user.isAuthenticated,
);

export const getUserTokenSelector = createSelector(
  getUser,
  user => user.token,
);

export const getUserTypeSelector = createSelector(
  getUser,
  user => user.type,
);
