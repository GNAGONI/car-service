import { createSelector } from 'reselect';

const getToasts = state => state.toasts;

export const getToastIsOpen = createSelector(
  getToasts,
  ({ open }) => open,
);

export const getToastMessage = createSelector(
  getToasts,
  ({ message }) => message,
);

export const getToastKind = createSelector(
  getToasts,
  ({ kind }) => kind,
);
