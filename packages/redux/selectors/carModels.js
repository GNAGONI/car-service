import { createSelector } from 'reselect';

const carModelsSelector = state => state.carModels;

export const carModels = createSelector(
  carModelsSelector,
  ({ modelsList }) => modelsList,
);
