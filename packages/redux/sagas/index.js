import auctions from './auctions';
import auction from './auction';
import contactUs from './contactUs';
import browseByMake from './browseByMake';
import longAuctions from './longAuctions';
import liveAuction from './liveAuction';
import awaitingCollection from './awaitingCollection';
import pendingPayments from './pendingPayments';
import quotesArchive from './quotesArchive';
import carModelsAuction from './carModels';
import user from './user';
import toasts from './toasts';
import quote from './quote';
import scrappedCars from './scrappedCars';

export default [
  ...auctions,
  ...contactUs,
  ...auction,
  ...longAuctions,
  ...liveAuction,
  ...awaitingCollection,
  ...pendingPayments,
  ...quotesArchive,
  ...browseByMake,
  ...carModelsAuction,
  ...user,
  ...toasts,
  ...quote,
  ...scrappedCars,
];
