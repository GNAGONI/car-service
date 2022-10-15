import { createSelector } from 'reselect';

const getQuotesArchiveState = state => state.quotesArchive;

export const getIsCarsListLoading = () =>
  createSelector(
    getQuotesArchiveState,
    ({ isCarsListLoading }) => isCarsListLoading,
  );

export const getCarsList = () =>
  createSelector(
    getQuotesArchiveState,
    ({ carsList }) => carsList,
  );

export const getCarsListPaging = () =>
  createSelector(
    getQuotesArchiveState,
    ({ carsListPaging }) => carsListPaging,
  );
export const isCarListLoaded = createSelector(
  getQuotesArchiveState,
  ({ isCarListLoaded }) => isCarListLoaded,
);

export const carListErrorMessage = createSelector(
  getQuotesArchiveState,
  ({ carsListError }) => carsListError && Array.isArray(carsListError.common) && carsListError.common[0],
);
