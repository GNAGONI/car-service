import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { STATUS } from '../constants';
import LongAuctionTypes from '../action-types/longAuctions';

export const longAuctionsState = {
  registerNumber: '',
  millage: '',
  selectedIds: {
    vehicleMakeId: '',
    vehicleModelId: '',
    varientId: '',
    trimId: '',
    derivativeId: '',
  },
  auction: [
    {
      vehicle: {},
    },
  ],
  vehicleMakes: [],
  vehicleModels: [],
  varients: [],
  trims: [],
  derivatives: [],
  bodyTypes: [],
  transmissions: [],
  fuelTypes: [],
  colours: [],
  message: '',
  status: STATUS.IDLE,
};

export default {
  longAuction: handleActions(
    {
      [LongAuctionTypes.SET_SEARCH_PARAMS.actionName]: (state, { payload }) =>
        immutable(state, {
          registerNumber: { $set: payload.registerNumber },
          millage: { $set: payload.millage },
        }),

      [LongAuctionTypes.GET_CAR_LONG_AUCTION.REQUEST]: state =>
        immutable(state, {
          message: { $set: '' },
          status: { $set: STATUS.RUNNING },
        }),

      [LongAuctionTypes.GET_CAR_DETAILS_LONG_AUCTION.REQUEST]: (state, { payload }) =>
        immutable(state, {
          selectedIds: { $set: payload.updatedSelectedIds },
          auction: { vehicle: { $set: payload.currentVehicleState } },
          message: { $set: '' },
          status: { $set: STATUS.RUNNING },
        }),

      [LongAuctionTypes.SET_CAR_DETAILS_LONG_AUCTION.actionName]: (state, { payload }) =>
        immutable(state, {
          auction: { vehicle: { $set: payload } },
        }),

      [LongAuctionTypes.RESTART_LONG_AUCTION.actionName]: state => immutable(state, { $merge: longAuctionsState }),

      [LongAuctionTypes.GET_CAR_LONG_AUCTION.SUCCESS]: (state, { payload }) =>
        immutable(state, {
          auction: { $set: payload.auction || [] },
          vehicleMakes: { $set: payload.vehicleMakes || [] },
          status: { $set: STATUS.SUCCESS },
        }),

      [LongAuctionTypes.GET_CAR_DETAILS_LONG_AUCTION.SUCCESS]: (state, { payload }) => {
        const updatedState = immutable(state, { $merge: {} });

        return immutable(updatedState, {
          status: { $set: STATUS.SUCCESS },
        });
      },

      [LongAuctionTypes.GET_CAR_LONG_AUCTION.ERROR]: (state, { payload }) =>
        immutable(state, {
          message: { $set: payload.message },
          status: { $set: STATUS.ERROR },
        }),
    },
    longAuctionsState,
  ),
};
