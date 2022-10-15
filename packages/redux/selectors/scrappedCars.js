import { createSelector } from 'reselect';

const getScrappedCars = state => state.scrappedCars;

export const getDeletedQuoteId = createSelector(
  getScrappedCars,
  scrappedCars => scrappedCars.deletedQuoteId,
);

export const getQuoteHistory = createSelector(
  getScrappedCars,
  scrappedCars => scrappedCars.quoteHistory,
);

export const getQuoteHistoryItems = createSelector(
  getQuoteHistory,
  quoteHistory => quoteHistory.items,
);

export const getQuoteHistoryTotal = createSelector(
  getQuoteHistory,
  quoteHistory => quoteHistory.total,
);

export const getQuoteHistoryLimit = createSelector(
  getQuoteHistory,
  quoteHistory => quoteHistory.limit,
);

export const getQuoteHistoryOffset = createSelector(
  getQuoteHistory,
  quoteHistory => quoteHistory.offset,
);

export const isQuoteHistoryInitialized = createSelector(
  getQuoteHistory,
  quoteHistory => quoteHistory.isInitialized,
);

export const getScrappedCarsSelector = createSelector(
  getScrappedCars,
  scrappedCars => scrappedCars.scrappedCars,
);

export const getScrappedCarsItems = createSelector(
  getScrappedCarsSelector,
  scrappedCars => scrappedCars.items,
);

export const getScrappedCarsTotal = createSelector(
  getScrappedCarsSelector,
  scrappedCars => scrappedCars.total,
);

export const getScrappedCarsLimit = createSelector(
  getScrappedCarsSelector,
  scrappedCars => scrappedCars.limit,
);

export const getScrappedCarsOffset = createSelector(
  getScrappedCarsSelector,
  scrappedCars => scrappedCars.offset,
);

export const isScrappedCarsInitialized = createSelector(
  getScrappedCarsSelector,
  scrappedCars => scrappedCars.isInitialized,
);
