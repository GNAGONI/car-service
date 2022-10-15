import { createSelector } from 'reselect';

const getAuctions = state => state.auctions;

export const filtersSelector = createSelector(
  getAuctions,
  auctions => auctions.filters,
);

export const availableFiltersSelector = createSelector(
  getAuctions,
  auctions => auctions.availableFilters,
);

export const sortingSelector = createSelector(
  getAuctions,
  auctions => auctions.sorting,
);

export const secondStageSelector = createSelector(
  getAuctions,
  auctions => auctions.secondStageInitialData,
);

export const postcodeSelector = createSelector(
  getAuctions,
  auctions => auctions.postcodeData,
);

export const thirdStageSelector = createSelector(
  getAuctions,
  auctions => auctions.thirdStageInitialData,
);

export const totalNumberOfAuctionsSelector = createSelector(
  getAuctions,
  auctions => auctions.totalNumberOfAuctions,
);

export const makeSecondStageDataSelector = () =>
  createSelector(
    secondStageSelector,
    data => data,
  );

export const makePostcodeSelector = () =>
  createSelector(
    postcodeSelector,
    data => data,
  );

export const makeThirdStageDataSelector = () =>
  createSelector(
    thirdStageSelector,
    data => data,
  );

// auctionsState.auctions
export const auctionsSelector = createSelector(
  getAuctions,
  auctions => auctions.auctions,
);

// auctionsState.filters
export const regionFiltersSelector = createSelector(
  filtersSelector,
  filters => filters.regionFilters,
);

export const carMakeFiltersSelector = createSelector(
  filtersSelector,
  filters => filters.carMakeFilters,
);

export const carModelFiltersSelector = createSelector(
  filtersSelector,
  filters => filters.carModelFilters,
);

export const modelYearFiltersSelector = createSelector(
  filtersSelector,
  filters => filters.modelYearFilters,
);

export const colorFiltersSelector = createSelector(
  filtersSelector,
  filters => filters.colorFilters,
);

export const mileageFiltersSelector = createSelector(
  filtersSelector,
  filters => filters.mileageFilters,
);

export const transmissionFiltersSelector = createSelector(
  filtersSelector,
  filters => filters.transmissionFilters,
);

export const fuelFiltersSelector = createSelector(
  filtersSelector,
  filters => filters.fuelFilters,
);

export const phraseFilterSelector = createSelector(
  filtersSelector,
  filters => filters.phraseFilter,
);

export const isAllListingsSelectedSelector = createSelector(
  filtersSelector,
  filters => filters.allListings,
);

export const isAuctionListingsSelectedSelector = createSelector(
  filtersSelector,
  filters => filters.auctionListings,
);

export const isMarkedForScrapListingsSelectedSelector = createSelector(
  filtersSelector,
  filters => filters.markedForScrapListings,
);

export const postcodeFilterSelector = createSelector(
  filtersSelector,
  filters => filters.postcodeFilter,
);

// auctionState.availableFilters
export const availableCarMakeFiltersSelector = createSelector(
  availableFiltersSelector,
  availableFilters => availableFilters.carMakeFilters,
);

export const availableCarModelFiltersSelector = createSelector(
  availableFiltersSelector,
  availableFilters => availableFilters.carModelFilters,
);

export const availableModelYearFiltersSelector = createSelector(
  availableFiltersSelector,
  availableFilters => availableFilters.modelYearFilters,
);

export const availableColorFiltersSelector = createSelector(
  availableFiltersSelector,
  availableFilters => availableFilters.colorFilters,
);

export const availableMileageFiltersSelector = createSelector(
  availableFiltersSelector,
  availableFilters => availableFilters.mileageFilters,
);

export const availableTransmissionFiltersSelector = createSelector(
  availableFiltersSelector,
  availableFilters => availableFilters.transmissionFilters,
);

export const availableFuelFiltersSelector = createSelector(
  availableFiltersSelector,
  availableFilters => availableFilters.fuelFilters,
);

// auctionState.sorting
export const sortBySelector = createSelector(
  sortingSelector,
  sorting => sorting.sortBy,
);

export const sortDirSelector = createSelector(
  sortingSelector,
  sorting => sorting.sortDir,
);

export const auctionsSortingSelector = createSelector(
  sortingSelector,
  sorting => sorting.limit,
);

export const offsetSelector = createSelector(
  sortingSelector,
  sorting => sorting.offset,
);

export const displayPerPageSelector = createSelector(
  sortingSelector,
  sorting => sorting.limit,
);

export const pageCountSelector = createSelector(
  totalNumberOfAuctionsSelector,
  displayPerPageSelector,
  (totalNumberOfAuctions, limit) => Math.ceil(totalNumberOfAuctions / limit),
);

export const pageNumberSelector = createSelector(
  offsetSelector,
  displayPerPageSelector,
  (offset, limit) => Math.ceil(offset / limit),
);
