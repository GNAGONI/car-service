import { addCacheResistanceToParams } from '../lib/cache';

export default class Auction {
  constructor(client) {
    this.client = client;
    this.resourceUrl = '/auctions';
  }

  getAuction = id => {
    const params = '';
    const cacheResistanceParams = addCacheResistanceToParams(params);

    return this.client.get(`${this.resourceUrl}/${id}`, cacheResistanceParams);
  };

  placeBid = (id, data) => this.client.post(`${this.resourceUrl}/${id}/bid`, data);
}
