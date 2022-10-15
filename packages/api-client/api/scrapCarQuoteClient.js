import { addCacheResistanceToParams } from '../lib/cache';

export default class ScrapCarQuoteClient {
  constructor(client) {
    this.client = client;
    this.resourceUrl = '/scrap-car-quote';
  }

  create = data => this.client.post(`${this.resourceUrl}/create`, data);

  enterDetails = (id, data) => this.client.post(`${this.resourceUrl}/${id}/enter-details`, data);

  arrangeCollection = (id, data) => this.client.post(`${this.resourceUrl}/${id}/arrange-collection`, data);

  paymentMethod = (id, data) => this.client.post(`${this.resourceUrl}/${id}/payment-method`, data);

  continueWithQuote = token => this.client.get(`${this.resourceUrl}/continue/${token}/`, addCacheResistanceToParams());
}
