const DEFAULT_LIMIT = 5;

export default class PostCodesClient {
  constructor(client) {
    this.client = client;
    this.resourceUrl = '/postcodes';
  }

  autocomplete = (postcode, limit = DEFAULT_LIMIT) =>
    this.client.get(`${this.resourceUrl}/${postcode}/autocomplete?limit=${limit}`);

  validate = postcode => this.client.get(`${this.resourceUrl}/${postcode}/validate`);
}
