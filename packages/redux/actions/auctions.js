import { createActions } from 'redux-actions';

import AuctionTypes from '../action-types/auctions';

export const { getAuctionsRequest, getPostcodeByLocationRequest } = createActions({
  [AuctionTypes.GET_AUCTIONS.REQUEST]: payload => payload,
  [AuctionTypes.GET_POSTCODE_BY_LOCATION.REQUEST]: payload => payload,
});

export const { getSecondStageDataRequest, getPostcodeRequest, getThirdStageDataRequest } = createActions({
  [AuctionTypes.GET_SECOND_STAGE_DATA.REQUEST]: payload => payload,
  [AuctionTypes.GET_POSTCODE.REQUEST]: payload => payload,
  [AuctionTypes.GET_THIRD_STAGE_DATA.REQUEST]: payload => payload,
});

export const {
  changeCarMakesFilters,
  changeCarModelsFilters,
  changeModelYearFilters,
  changeColorFilters,
  changeMileageFiltersProgress,
  changeMileageFiltersFinish,
  changeTransmissionFilters,
  changeFuelFilters,
  changePhraseFilter,
  dropFilters,
  changeAllFilters,
  changePostcodeFilter,

  selectAllListings,
  selectAuctionListings,
  selectMarkedForScrapListings,
  viewGridFormatChange,
  sortByChange,
  pageChange,
  auctionsDisplayPerPageChange,

  searchAuctions,
  updateAuctionsBid,
} = createActions({
  [AuctionTypes.CHANGE_CAR_MAKES_FILTERS.actionName]: carMakesFilters => ({ carMakesFilters }),
  [AuctionTypes.CHANGE_CAR_MODELS_FILTERS.actionName]: carModelsFilters => ({ carModelsFilters }),
  [AuctionTypes.CHANGE_MODEL_YEAR_FILTERS.actionName]: modelYearFilters => ({ modelYearFilters }),
  [AuctionTypes.CHANGE_COLOR_FILTERS.actionName]: colorFilters => ({ colorFilters }),
  [AuctionTypes.CHANGE_MILEAGE_FILTERS.PROGRESS]: mileageFilters => ({ mileageFilters }),
  [AuctionTypes.CHANGE_MILEAGE_FILTERS.FINISH]: mileageFilters => ({ mileageFilters }),
  [AuctionTypes.CHANGE_TRANSMISSION_FILTERS.actionName]: transmissionFilters => ({ transmissionFilters }),
  [AuctionTypes.CHANGE_FUEL_FILTERS.actionName]: fuelFilters => ({ fuelFilters }),
  [AuctionTypes.CHANGE_PHRASE_FILTER.actionName]: phraseFilter => ({ phraseFilter }),
  [AuctionTypes.DROP_FILTERS.actionName]: () => ({}),
  [AuctionTypes.CHANGE_ALL_FILTERS.actionName]: filters => ({ filters }),
  [AuctionTypes.CHANGE_POSTCODE_FILTER]: postcode => postcode,

  [AuctionTypes.SELECT_ALL_LISTINGS.actionName]: () => ({}),
  [AuctionTypes.SELECT_AUCTION_LISTINGS.actionName]: () => ({}),
  [AuctionTypes.SELECT_MARKED_FOR_SCRAP_LISTINGS.actionName]: () => ({}),
  [AuctionTypes.VIEW_GRID_FORMAT_CHANGE.actionName]: () => ({}),
  [AuctionTypes.SORT_BY_CHANGE.actionName]: sortBy => sortBy,
  [AuctionTypes.PAGE_CHANGE.actionName]: offset => ({ offset }),
  [AuctionTypes.AUCTIONS_DISPLAY_PER_PAGE_CHANGE.actionName]: showPerPage => ({ showPerPage }),
  [AuctionTypes.SEARCH_AUCTIONS.actionName]: () => ({}),
  [AuctionTypes.UPDATE_AUCTIONS_BID]: data => data,
});
