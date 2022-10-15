import { call, put, takeLatest, select, race, delay } from 'redux-saga/effects';

import client from '@car-service/api-client';
import AuctionsTypes from '../action-types/auctions';
import LocationTypes from '../action-types/location';
import { DEFAULT_POSTCODE, DELAY_TIME } from '../constants';

export const getAuctionsFilters = state => state.auctions.filters;
export const getAuctionsSorting = state => state.auctions.sorting;
export const getLocation = state => state.location;

export function* getAuctions() {
  try {
    const filters = yield select(getAuctionsFilters);
    const sorting = yield select(getAuctionsSorting);
    const location = yield select(getLocation);
    const delayTime = 3000;

    const { timeout, data } = yield race({
      timeout: delay(delayTime),
      data: call(client.auctions.list, {
        ...filters,
        ...sorting,
        ...location,
      }),
    });
    if (timeout) {
      yield put({
        type: AuctionsTypes.GET_AUCTIONS.ERROR,
        payload: new Error(`Timeout ${timeout}`),
      });
    } else {
      yield put({
        type: AuctionsTypes.GET_AUCTIONS.SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    yield put({
      type: AuctionsTypes.GET_AUCTIONS.ERROR,
      payload: error,
    });
  }
}

export function* getPostcodeByFilter({ payload }) {
  try {
    const { timeout, data } = yield race({
      timeout: delay(DELAY_TIME),
      data: call(client.locations.getPostcodeByLocation, payload),
    });

    yield put({
      type: AuctionsTypes.GET_POSTCODE_BY_LOCATION.SUCCESS,
      payload: timeout || !data ? DEFAULT_POSTCODE : data,
    });
  } catch (err) {
    yield put({
      type: AuctionsTypes.GET_POSTCODE_BY_LOCATION.ERROR,
      payload: err,
    });
  }
}

export function* getSecondStageData() {
  try {
    const data = yield call(client.auctions.getSecondStageInitialData);

    yield put({
      type: AuctionsTypes.GET_SECOND_STAGE_DATA.SUCCESS,
      payload: data,
    });
  } catch (err) {
    yield put({
      type: AuctionsTypes.GET_SECOND_STAGE_DATA.ERROR,
      payload: err,
    });
  }
}

export function* getThirdStageData() {
  try {
    const data = yield call(client.auctions.getThirdStageInitialData);

    yield put({
      type: AuctionsTypes.GET_THIRD_STAGE_DATA.SUCCESS,
      payload: data,
    });
  } catch (err) {
    yield put({
      type: AuctionsTypes.GET_THIRD_STAGE_DATA.ERROR,
      payload: err,
    });
  }
}

export function* getPostcode() {
  try {
    const data = yield call(client.auctions.getPostcodeInitialData);

    yield put({
      type: AuctionsTypes.GET_POSTCODE.SUCCESS,
      payload: data,
    });
  } catch (err) {
    yield put({
      type: AuctionsTypes.GET_POSTCODE.ERROR,
      payload: err,
    });
  }
}

export default [
  takeLatest(
    [
      AuctionsTypes.GET_AUCTIONS.REQUEST,
      AuctionsTypes.PAGE_CHANGE.actionName,
      AuctionsTypes.AUCTIONS_DISPLAY_PER_PAGE_CHANGE.actionName,
      AuctionsTypes.SELECT_ALL_LISTINGS.actionName,
      AuctionsTypes.SELECT_AUCTION_LISTINGS.actionName,
      AuctionsTypes.SELECT_MARKED_FOR_SCRAP_LISTINGS.actionName,
      AuctionsTypes.SORT_BY_CHANGE.actionName,
      AuctionsTypes.CHANGE_CAR_MAKES_FILTERS.actionName,
      AuctionsTypes.CHANGE_CAR_MODELS_FILTERS.actionName,
      AuctionsTypes.CHANGE_MODEL_YEAR_FILTERS.actionName,
      AuctionsTypes.CHANGE_COLOR_FILTERS.actionName,
      AuctionsTypes.CHANGE_MILEAGE_FILTERS.FINISH,
      AuctionsTypes.CHANGE_TRANSMISSION_FILTERS.actionName,
      AuctionsTypes.CHANGE_FUEL_FILTERS.actionName,
      AuctionsTypes.SEARCH_AUCTIONS.actionName,
      AuctionsTypes.CHANGE_ALL_FILTERS.actionName,
      LocationTypes.CHANGE_LOCATION_REGION_FILTERS.actionName,
      LocationTypes.CHANGE_LOCATION_AREA_FILTERS.actionName,
    ],
    getAuctions,
  ),
  takeLatest(AuctionsTypes.GET_POSTCODE_BY_LOCATION.REQUEST, getPostcodeByFilter),
  takeLatest(AuctionsTypes.GET_SECOND_STAGE_DATA.REQUEST, getSecondStageData),
  takeLatest(AuctionsTypes.GET_POSTCODE.REQUEST, getPostcode),
  takeLatest(AuctionsTypes.GET_THIRD_STAGE_DATA.REQUEST, getThirdStageData),
];
