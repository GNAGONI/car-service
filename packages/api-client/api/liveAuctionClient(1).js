export default class LiveAuctions {
  constructor(client) {
    this.client = client;
    this.resourceCarListUrl = '/auctions/live';
  }

  getLiveAuctionCarList = () => this.client.get(this.resourceCarListUrl);
}
