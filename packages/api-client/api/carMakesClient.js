export default class CarMakes {
  constructor(client) {
    this.client = client;
    this.resourceUrl = '/auctions/car-makes';
  }

  logo = carMakeName => this.client.get(`${this.resourceUrl}/${carMakeName}/logo`);
}
