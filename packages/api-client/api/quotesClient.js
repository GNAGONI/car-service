import queryString from 'query-string';
import { addCacheResistanceToParams } from '../lib/cache';

export default class QuotesClient {
  constructor(client) {
    this.client = client;
    this.resourceUrl = '/quotes';
  }

  getHistory = ({ limit, offset }) =>
    this.client.get(
      `${this.resourceUrl}/history`,
      addCacheResistanceToParams(queryString.stringify({ limit, offset })),
    );

  getScrapped = ({ limit, offset }) =>
    this.client.get(
      `${this.resourceUrl}/scrapped`,
      addCacheResistanceToParams(queryString.stringify({ limit, offset })),
    );

  deleteQuote = id => this.client.delete(`${this.resourceUrl}/${id}`);
}
