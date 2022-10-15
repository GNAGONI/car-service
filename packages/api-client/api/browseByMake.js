export default class BrowseByMake {
  constructor(client) {
    this.client = client;
    this.resourceCarListUrl = '/auctions/car-makes ';
  }

  getBrowseByMakeAuctions = () => this.client.get(this.resourceCarListUrl);
}
