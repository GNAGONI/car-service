import { combineReducers } from 'redux';

import auctions from './auctions';
import auction from './auction';
import user from './user';
import userAuth from './userAuth';
import car from './car';
import longAuction from './longAuction';
import dropDown from './dropDown';
import liveAuction from './liveAuction';
import awaitingCollection from './awaitingCollection';
import pendingPayments from './pendingPayments';
import quotesArchive from './quotesArchive';
import modal from './modal';
import browseByMake from './browseByMake';
import location from './location';
import carModels from './carModels';
import message from './message';
import toasts from './toasts';
import quote from './quote';
import scrappedCars from './scrappedCars';

export default combineReducers({
  ...auctions,
  ...auction,
  ...car,
  ...user,
  ...longAuction,
  ...dropDown,
  ...liveAuction,
  ...awaitingCollection,
  ...pendingPayments,
  ...quotesArchive,
  ...modal,
  ...browseByMake,
  ...location,
  ...carModels,
  ...message,
  ...toasts,
  ...quote,
  ...scrappedCars,
  ...userAuth,
});
