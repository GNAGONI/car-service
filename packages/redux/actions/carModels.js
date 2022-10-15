import { createActions } from 'redux-actions';

import AuctionTypes from '../action-types/carModels';

export const { getCarModelsListRequest, getCarModelsListSuccess, getModelsListError } = createActions({
  [AuctionTypes.GET_CAR_MODELS_LIST.REQUEST]: mark => mark,
  [AuctionTypes.GET_CAR_MODELS_LIST.SUCCESS]: auctions => auctions,
  [AuctionTypes.GET_CAR_MODELS_LIST.ERROR]: error => error,
});
