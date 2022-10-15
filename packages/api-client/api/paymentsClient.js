import { addCacheResistanceToParams } from '../lib/cache';

export default class Payments {
  constructor(client) {
    this.client = client;
    this.resourceUrl = '/payments';
  }

  getPackages = () => {
    const cacheResistanceParams = addCacheResistanceToParams();

    return this.client.get(`${this.resourceUrl}`, cacheResistanceParams);
  };
}
