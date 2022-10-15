import queryString from 'query-string';

export default class Vehicles {
  constructor(client) {
    this.client = client;
    this.resourceUrl = '/vehicles';
  }

  getVehiclesFeatures = id => this.client.get(`${this.resourceUrl}/${id}/features`);

  getAvailableColours = () => this.client.get(`${this.resourceUrl}/available-colours`);

  getAvailableOptions = (carMakeId, carModelId, carVariantId, carDerivativeId) => {
    const data = {
      carMakeId: parseInt(carMakeId, 10) || undefined,
      carModelId: parseInt(carModelId, 10) || undefined,
      carVarientId: parseInt(carVariantId, 10) || undefined,
      carDerivativeId: parseInt(carDerivativeId, 10) || undefined,
    };
    const params = queryString.stringify(
      {
        ...data,
      },
      { arrayFormat: 'bracket' },
    );

    return this.client.get(`${this.resourceUrl}/filter`, params);
  };
}
