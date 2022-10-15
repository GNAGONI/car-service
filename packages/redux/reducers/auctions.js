import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import AuctionTypes from '../action-types/auctions';
import { STATUS } from '../constants';

export const auctionsState = {
  auctions: [],
  filters: {
    carMakeFilters: [],
    carModelFilters: [],
    modelYearFilters: [],
    colorFilters: [],
    mileageFilters: [],
    transmissionFilters: [],
    fuelFilters: [],
    phraseFilter: [],
    allListings: true,
    auctionListings: false,
    markedForScrapListings: false,
    postcodeFilter: '',
  },
  availableFilters: {
    carMakeFilters: [],
    carModelFilters: [],
    modelYearFilters: [],
    colorFilters: [],
    mileageFilters: [],
    transmissionFilters: [],
    fuelFilters: [],
  },
  sorting: {
    sortBy: 'end_date_time',
    sortDir: 'asc',
    limit: 30,
    offset: 0,
  },
  totalNumberOfAuctions: 0,
  message: '',
  status: STATUS.IDLE,
};

export default {
  auctions: handleActions(
    {
      // GET_AUCTIONS
      [AuctionTypes.GET_AUCTIONS.REQUEST]: state =>
        immutable(state, {
          auctions: { $set: [] },
          message: { $set: '' },
          status: { $set: STATUS.RUNNING },
          payload: { $set: { testFilter: ['state'] } },
        }),
      [AuctionTypes.GET_AUCTIONS.SUCCESS]: (state, { payload: { totalNumberOfAuctions, items, availableFilters } }) =>
        immutable(state, {
          totalNumberOfAuctions: { $set: totalNumberOfAuctions || 0 },
          auctions: { $set: items || [] },
          availableFilters: { $set: availableFilters || [] },
          status: { $set: STATUS.SUCCESS },
        }),
      [AuctionTypes.GET_AUCTIONS.ERROR]: (state, { payload }) =>
        immutable(state, {
          message: { $set: payload },
          status: { $set: STATUS.ERROR },
        }),

      // SEARCH AUCTIONS
      [AuctionTypes.SEARCH_AUCTIONS.actionName]: state =>
        immutable(state, {
          filters: {
            carMakeFilters: { $set: [] },
            carModelFilters: { $set: [] },
            modelYearFilters: { $set: [] },
            colorFilters: { $set: [] },
            mileageFilters: { $set: [] },
            transmissionFilters: { $set: [] },
            fuelFilters: { $set: [] },
          },
          sorting: {
            offset: { $set: 0 },
          },
          message: { $set: '' },
          status: { $set: STATUS.RUNNING },
        }),

      [AuctionTypes.CHANGE_CAR_MAKES_FILTERS.actionName]: (state, { payload }) =>
        immutable(state, {
          filters: {
            carMakeFilters: { $set: payload.carMakesFilters },
          },
          sorting: {
            offset: { $set: 0 },
          },
        }),
      [AuctionTypes.CHANGE_CAR_MODELS_FILTERS.actionName]: (state, { payload }) =>
        immutable(state, {
          filters: {
            carModelFilters: { $set: payload.carModelsFilters },
          },
          sorting: {
            offset: { $set: 0 },
          },
        }),
      [AuctionTypes.CHANGE_MODEL_YEAR_FILTERS.actionName]: (state, { payload }) =>
        immutable(state, {
          filters: {
            modelYearFilters: { $set: payload.modelYearFilters },
          },
          sorting: {
            offset: { $set: 0 },
          },
        }),
      [AuctionTypes.CHANGE_COLOR_FILTERS.actionName]: (state, { payload }) =>
        immutable(state, {
          filters: {
            colorFilters: { $set: payload.colorFilters },
          },
          sorting: {
            offset: { $set: 0 },
          },
        }),
      [AuctionTypes.CHANGE_MILEAGE_FILTERS.PROGRESS]: (state, { payload }) =>
        immutable(state, {
          filters: {
            mileageFilters: { $set: payload.mileageFilters },
          },
          sorting: {
            offset: { $set: 0 },
          },
        }),
      [AuctionTypes.CHANGE_MILEAGE_FILTERS.FINISH]: (state, { payload }) =>
        immutable(state, {
          filters: {
            mileageFilters: { $set: payload.mileageFilters },
          },
          sorting: {
            offset: { $set: 0 },
          },
        }),
      [AuctionTypes.CHANGE_TRANSMISSION_FILTERS.actionName]: (state, { payload }) =>
        immutable(state, {
          filters: {
            transmissionFilters: { $set: payload.transmissionFilters },
          },
          sorting: {
            offset: { $set: 0 },
          },
        }),
      [AuctionTypes.CHANGE_FUEL_FILTERS.actionName]: (state, { payload }) =>
        immutable(state, {
          filters: {
            fuelFilters: { $set: payload.fuelFilters },
          },
          sorting: {
            offset: { $set: 0 },
          },
        }),
      [AuctionTypes.CHANGE_PHRASE_FILTER.actionName]: (state, { payload }) =>
        immutable(state, {
          filters: {
            phraseFilter: { $set: payload.phraseFilter },
            carMakeFilters: { $set: [] },
            carModelFilters: { $set: [] },
            modelYearFilters: { $set: [] },
            colorFilters: { $set: [] },
            mileageFilters: { $set: [] },
            transmissionFilters: { $set: [] },
            fuelFilters: { $set: [] },
          },
        }),

      [AuctionTypes.DROP_FILTERS.actionName]: state =>
        immutable(state, {
          filters: {
            phraseFilter: { $set: [] },
            carMakeFilters: { $set: [] },
            carModelFilters: { $set: [] },
            modelYearFilters: { $set: [] },
            colorFilters: { $set: [] },
            mileageFilters: { $set: [] },
            transmissionFilters: { $set: [] },
            fuelFilters: { $set: [] },
          },
        }),

      [AuctionTypes.CHANGE_ALL_FILTERS.actionName]: (state, { payload }) => {
        const {
          filters: [carMakeFilters, colorFilters, fuelFilters, carModelFilters, modelYearFilters, transmissionFilters],
        } = payload;

        return immutable(state, {
          filters: {
            carMakeFilters: { $set: carMakeFilters.value },
            carModelFilters: { $set: carModelFilters.value },
            modelYearFilters: { $set: modelYearFilters.value },
            colorFilters: { $set: colorFilters.value },
            transmissionFilters: { $set: transmissionFilters.value },
            fuelFilters: { $set: fuelFilters.value },
          },
        });
      },

      [AuctionTypes.CHANGE_POSTCODE_FILTER]: (state, { payload }) =>
        immutable(state, {
          filters: {
            postcodeFilter: { $set: payload },
          },
        }),

      // GET POSTCODE BY LOCATION
      [AuctionTypes.GET_POSTCODE_BY_LOCATION.REQUEST]: state =>
        immutable(state, {
          filters: {
            postcodeFilter: { $set: '' },
          },
          message: { $set: '' },
          status: { $set: STATUS.RUNNING },
        }),

      [AuctionTypes.GET_POSTCODE_BY_LOCATION.SUCCESS]: (state, { payload }) =>
        immutable(state, {
          filters: {
            postcodeFilter: { $set: payload },
          },
          status: { $set: STATUS.SUCCESS },
        }),
      [AuctionTypes.GET_POSTCODE_BY_LOCATION.ERROR]: (state, { payload }) =>
        immutable(state, {
          message: { $set: payload.message },
          status: { $set: STATUS.ERROR },
        }),

      // GET STAGE 2 INITIAL DATA
      [AuctionTypes.GET_SECOND_STAGE_DATA.REQUEST]: state =>
        immutable(state, {
          secondStageInitialData: { $set: {} },
          message: { $set: '' },
          status: { $set: STATUS.RUNNING },
        }),
      [AuctionTypes.GET_SECOND_STAGE_DATA.SUCCESS]: (state, { payload }) =>
        immutable(state, {
          secondStageInitialData: { $set: payload || {} },
          status: { $set: STATUS.SUCCESS },
        }),
      [AuctionTypes.GET_SECOND_STAGE_DATA.ERROR]: (state, { payload }) =>
        immutable(state, {
          message: { $set: payload.message },
          status: { $set: STATUS.ERROR },
        }),

      // GET POSTCODE INITIAL DATA
      [AuctionTypes.GET_POSTCODE.REQUEST]: state =>
        immutable(state, {
          postcodeData: { $set: [] },
          message: { $set: '' },
          status: { $set: STATUS.RUNNING },
        }),
      [AuctionTypes.GET_POSTCODE.SUCCESS]: (state, { payload }) =>
        immutable(state, {
          postcodeData: { $set: payload || [] },
          status: { $set: STATUS.SUCCESS },
        }),
      [AuctionTypes.GET_POSTCODE.ERROR]: (state, { payload }) =>
        immutable(state, {
          message: { $set: payload.message },
          status: { $set: STATUS.ERROR },
        }),

      // GET STAGE 3 INITIAL DATA
      [AuctionTypes.GET_THIRD_STAGE_DATA.REQUEST]: state =>
        immutable(state, {
          thirdStageInitialData: { $set: {} },
          message: { $set: '' },
          status: { $set: STATUS.RUNNING },
        }),
      [AuctionTypes.GET_THIRD_STAGE_DATA.SUCCESS]: (state, { payload }) =>
        immutable(state, {
          thirdStageInitialData: { $set: payload || {} },
          status: { $set: STATUS.SUCCESS },
        }),
      [AuctionTypes.GET_THIRD_STAGE_DATA.ERROR]: (state, { payload }) =>
        immutable(state, {
          message: { $set: payload.message },
          status: { $set: STATUS.ERROR },
        }),

      // PAGE CHANGE - CAR AUCTION RESULTS
      [AuctionTypes.PAGE_CHANGE.actionName]: (state, { payload }) =>
        immutable(state, {
          sorting: {
            offset: { $set: payload.offset },
          },
          status: { $set: STATUS.SUCCESS },
        }),

      // SHOW PER PAGE - CAR AUCTION RESULTS
      [AuctionTypes.AUCTIONS_DISPLAY_PER_PAGE_CHANGE.actionName]: (state, { payload }) =>
        immutable(state, {
          sorting: {
            limit: { $set: payload.showPerPage },
            offset: { $set: 0 },
          },
          status: { $set: STATUS.SUCCESS },
        }),

      // SORT BY CHANGE HANDLER - CAR AUCTION RESULTS
      [AuctionTypes.SORT_BY_CHANGE.actionName]: (state, { payload }) =>
        immutable(state, {
          sorting: {
            sortBy: { $set: payload.sortBy },
            sortDir: { $set: payload.sortDir },
          },
          status: { $set: STATUS.SUCCESS },
        }),

      // LISTINGS MANAGEMENT - CAR AUCTION RESULTS
      [AuctionTypes.SELECT_ALL_LISTINGS.actionName]: state =>
        immutable(state, {
          filters: {
            allListings: { $set: true },
            auctionListings: { $set: false },
            markedForScrapListings: { $set: false },
          },
          status: { $set: STATUS.SUCCESS },
        }),

      [AuctionTypes.SELECT_AUCTION_LISTINGS.actionName]: state =>
        immutable(state, {
          filters: {
            allListings: { $set: false },
            auctionListings: { $set: true },
            markedForScrapListings: { $set: false },
          },
          status: { $set: STATUS.SUCCESS },
        }),

      [AuctionTypes.SELECT_MARKED_FOR_SCRAP_LISTINGS.actionName]: state =>
        immutable(state, {
          filters: {
            allListings: { $set: false },
            auctionListings: { $set: false },
            markedForScrapListings: { $set: true },
          },
          status: { $set: STATUS.SUCCESS },
        }),

      [AuctionTypes.UPDATE_AUCTIONS_BID]: (state, { payload: { index, amount } }) =>
        immutable(state, {
          auctions: {
            [index]: {
              numberOfBids: { $set: state.auctions[index].numberOfBids + 1 },
              currentMaxBid: { $set: amount },
            },
          },
        }),
    },
    auctionsState,
  ),
};
