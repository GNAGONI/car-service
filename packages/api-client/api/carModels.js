export default class CarModels {
  constructor(client) {
    this.client = client;
    this.resourceModelsUrl = '/auctions/car-makes';
  }

  getCarModelsData = mark => this.client.get(`${this.resourceModelsUrl}/${mark}/car-models`);

  getCarMakesAndModelsPageData = ({ carMake, carModel }) =>
    this.client.get(`${this.resourceModelsUrl}/${carMake}/car-models/${carModel}`);
}
