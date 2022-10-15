import { createSelector } from 'reselect';

const getPendingPaymentsState = state => state.pendingPayment;

export const getPendingPaymentsContent = () =>
  createSelector(
    getPendingPaymentsState,
    ({ pageData }) => pageData && pageData.content,
  );

export const getPendingPaymentsTitle = () =>
  createSelector(
    getPendingPaymentsState,
    ({ pageData }) => pageData && pageData.title,
  );

export const getIsCarsListLoading = () =>
  createSelector(
    getPendingPaymentsState,
    ({ isCarsListLoading }) => isCarsListLoading,
  );

export const getCarsList = () =>
  createSelector(
    getPendingPaymentsState,
    ({ carsList }) => carsList,
  );

export const getCarsListPaging = () =>
  createSelector(
    getPendingPaymentsState,
    ({ carsListPaging }) => carsListPaging,
  );

export const isCarListLoaded = createSelector(
  getPendingPaymentsState,
  ({ isCarListLoaded }) => isCarListLoaded,
);

export const carListErrorMessage = createSelector(
  getPendingPaymentsState,
  ({ carsListError }) => carsListError && Array.isArray(carsListError.common) && carsListError.common[0],
);
