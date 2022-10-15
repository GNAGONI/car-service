import queryString from 'query-string';

export default class Locations {
  constructor(client) {
    this.client = client;
    this.resourceUrl = '/locations';
    this.secondResourceUrl = '/location';
  }

  getPopularLocations = pageId =>
    this.client.get(`${this.resourceUrl}/popular`, queryString.stringify({ page_id: pageId }));

  getLocations = query => this.client.get(`${this.resourceUrl}/`, queryString.stringify(query));

  getRegionPageData = region => this.client.get(`${this.resourceUrl}/region/${region}`);

  getLocationsPageData = location => this.client.get(`${this.resourceUrl}/${location}`);

  search = query => this.client.get(`${this.resourceUrl}/search`, queryString.stringify(query));

  getLocationByPostcode = postCode =>
    this.client.get(`${this.secondResourceUrl}/${postCode.toString().replace(/\s+/g, '')}/addresses`);

  getPostcodeByLocation = ({ latitude, longitude }) =>
    this.client.get(
      `${this.resourceUrl}/postcode-by-coordinates`,
      queryString.stringify({ lat: latitude.toFixed(4), lng: longitude.toFixed(4) }),
    );
}
