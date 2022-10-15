import { createSelector } from 'reselect';

const getAwaitingCollectionState = state => state.awaitingCollection;

export const getIsCarsListLoading = () =>
  createSelector(
    getAwaitingCollectionState,
    ({ isCarsListLoading }) => isCarsListLoading,
  );

export const getCarsList = () =>
  createSelector(
    getAwaitingCollectionState,
    ({ carsList }) => carsList,
  );

export const getCarsListPaging = () =>
  createSelector(
    getAwaitingCollectionState,
    ({ carsListPaging }) => carsListPaging,
  );

export const isCarListLoaded = createSelector(
  getAwaitingCollectionState,
  ({ isCarListLoaded }) => isCarListLoaded,
);

export const carListErrorMessage = createSelector(
  getAwaitingCollectionState,
  ({ carsListError }) => carsListError && Array.isArray(carsListError.common) && carsListError.common[0],
);
