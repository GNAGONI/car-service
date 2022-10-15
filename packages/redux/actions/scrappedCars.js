import { createActions } from 'redux-actions';
import AuctionTypes from '../action-types/scrappedCars';

export const {
  deleteQuoteRequest,
  deleteQuoteSuccess,
  deleteQuoteError,
  getQuoteHistoryRequest,
  getQuoteHistorySuccess,
  getQuoteHistoryError,
  getScrappedCarsRequest,
  getScrappedCarsSuccess,
  getScrappedCarsError,
  setDeletedQuoteId,
  initializeQuoteHistory,
  initializeScrappedCars,
} = createActions({
  [AuctionTypes.DELETE_QUOTE.REQUEST]: payload => payload,
  [AuctionTypes.DELETE_QUOTE.SUCCESS]: payload => payload,
  [AuctionTypes.DELETE_QUOTE.ERROR]: payload => payload,
  [AuctionTypes.GET_QUOTE_HISTORY.REQUEST]: payload => payload,
  [AuctionTypes.GET_QUOTE_HISTORY.SUCCESS]: payload => payload,
  [AuctionTypes.GET_QUOTE_HISTORY.ERROR]: payload => payload,
  [AuctionTypes.GET_SCRAPPED_CARS.REQUEST]: payload => payload,
  [AuctionTypes.GET_SCRAPPED_CARS.SUCCESS]: payload => payload,
  [AuctionTypes.GET_SCRAPPED_CARS.ERROR]: payload => payload,
  [AuctionTypes.SET_DELETED_QUOTE_ID]: payload => payload,
  [AuctionTypes.INITIALIZE_QUOTE_HISTORY]: () => {},
  [AuctionTypes.INITIALIZE_SCRAPPED_CARS]: () => {},
});
