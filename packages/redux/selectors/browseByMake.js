import { createSelector } from 'reselect';

const browseByMakeSelector = state => state.browseByMake;

export const browseByMakeData = createSelector(
  browseByMakeSelector,
  ({ auctionData }) => auctionData,
);

export const browseByMakeOptionList = createSelector(
  browseByMakeSelector,
  ({ auctionData }) =>
    Array.isArray(auctionData) &&
    auctionData.map(({ id, carMakeName, modelsPageKey }) => ({ value: id, label: carMakeName, key: modelsPageKey })),
);
