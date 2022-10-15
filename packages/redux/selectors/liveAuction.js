import { createSelector } from 'reselect';

const getLiveAuctionState = state => state.liveAuction;

export const getLiveAuctionContent = () =>
  createSelector(
    getLiveAuctionState,
    ({ pageData }) => pageData && pageData.content,
  );

export const getLiveAuctionTitle = () =>
  createSelector(
    getLiveAuctionState,
    ({ pageData }) => pageData && pageData.title,
  );

export const getLiveAuctionFilds = () =>
  createSelector(
    getLiveAuctionState,
    ({ pageData }) => pageData && pageData.fields,
  );

export const getIsCarsListLoading = () =>
  createSelector(
    getLiveAuctionState,
    ({ isCarsListLoading }) => isCarsListLoading,
  );

export const getCarsList = () =>
  createSelector(
    getLiveAuctionState,
    ({ carsList }) => carsList,
  );

export const getCarsListPaging = () =>
  createSelector(
    getLiveAuctionState,
    ({ carsListPaging }) => carsListPaging,
  );

export const getCarsListFilter = () =>
  createSelector(
    getLiveAuctionState,
    ({ carsListFilter }) => carsListFilter,
  );

export const isCarListLoaded = createSelector(
  getLiveAuctionState,
  ({ isCarListLoaded }) => isCarListLoaded,
);

export const carListErrorMessage = createSelector(
  getLiveAuctionState,
  ({ carsListError }) => carsListError && Array.isArray(carsListError.common) && carsListError.common[0],
);
