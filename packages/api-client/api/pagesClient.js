export default class PageData {
  constructor(client) {
    this.client = client;
    this.resourceUrl = '/pages';
  }

  getPageData = key => this.client.get(`${this.resourceUrl}/${key}`);

  getAwaitingCollectionPageData = () => this.getPageData('Awaiting Collection');

  getBrowseByMakePageData = () => this.getPageData('Car auctions by car makes');

  getCarAuctionPageData = () => this.getPageData('Car auctions');

  getCarMakesPageData = carMake => this.getPageData(`Latest ${carMake} auctions`);

  getLiveAuctionPageData = () => this.getPageData('Live Auctions');

  getPendingPaymentsPageData = () => this.getPageData('Pending Payments');

  getQuotesArchivePageData = () => this.getPageData('Quotes Archive');

  getLocationPageData = location => this.getPageData(`Car auctions in ${location}`);

  getCarAuctionsByLocationPageData = () => this.getPageData('Car auctions by location');
}
