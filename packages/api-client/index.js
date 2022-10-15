import RestClient from './restClient';
import Auctions from './api/auctionsClient';
import Auth from './api/authClient';
import CarMakes from './api/carMakesClient';
import Auction from './api/auctionClient';
import Enquiry from './api/enquiryClient';
import LongAuction from './api/longAuctionClient';
import LiveAuctions from './api/liveAuctionClient';
import PendingPayment from './api/pendingPaymentClient';
import AwaitingCollection from './api/awaitingCollection';
import QuotesArchive from './api/quotesArchiveClient';
import BrowseByMake from './api/browseByMake';
import Locations from './api/locationsClient';
import CarModels from './api/carModels';
import PageData from './api/pagesClient';
import User from './api/userClient';
import Vehicles from './api/vehiclesClient';
import Payments from './api/paymentsClient';
import ScrapCarQuote from './api/scrapCarQuoteClient';
import QuotesClient from './api/quotesClient';
import PostCodesClient from './api/postCodesClient';
import CustomerClient from './api/customerClient';

class Client {
  constructor() {
    this.postCodesCilent = new RestClient(process.env.POSTCODES_BASE_URL);
    this.apiCilent = new RestClient(process.env.API_BASE_URL);

    this.postCodes = new PostCodesClient(this.postCodesCilent);

    this.auctions = new Auctions(this.apiCilent);
    this.auctions.carMakes = new CarMakes(this.apiCilent);
    this.auth = new Auth(this.apiCilent);
    this.enquiry = new Enquiry(this.apiCilent);
    this.longAuctions = new LongAuction(this.apiCilent);
    this.liveAuction = new LiveAuctions(this.apiCilent);
    this.pendingPayments = new PendingPayment(this.apiCilent);
    this.awaitingCollection = new AwaitingCollection(this.apiCilent);
    this.quotesArchive = new QuotesArchive(this.apiCilent);
    this.auction = new Auction(this.apiCilent);
    this.browseByMake = new BrowseByMake(this.apiCilent);
    this.locations = new Locations(this.apiCilent);
    this.carModels = new CarModels(this.apiCilent);
    this.pageData = new PageData(this.apiCilent);
    this.user = new User(this.apiCilent);
    this.vehicles = new Vehicles(this.apiCilent);
    this.payments = new Payments(this.apiCilent);
    this.scrapCarQuote = new ScrapCarQuote(this.apiCilent);
    this.quotes = new QuotesClient(this.apiCilent);
    this.customer = new CustomerClient(this.apiCilent);
  }
}

export default new Client();
