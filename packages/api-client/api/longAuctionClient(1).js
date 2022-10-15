import queryString from 'query-string';
import { addCacheResistanceToParams } from '../lib/cache';

export default class LongAuction {
  constructor(client) {
    this.client = client;
    this.resourceUrl = '/auctions';
  }

  list = filter => this.client.get(this.resourceUrl, queryString.stringify(filter));

  // TODO: remove route ready
  create = () => {};

  findDetails = (registrationNumber, mileage) => {
    const data = {
      registrationNumber,
      millage: mileage,
    };

    return this.client.post(`${this.resourceUrl}/vehicle-details`, data);
  };

  saveDataFromPhotosStep = (id, data) => this.client.postFormData(`${this.resourceUrl}/${id}/photos`, data);

  saveDataFromListingStep = (id, data) => this.client.post(`${this.resourceUrl}/${id}/listing`, data);

  saveDataFromPriceAndTimeStep = (id, data) => this.client.post(`${this.resourceUrl}/${id}/details`, data);

  updateAuctionOptions = data => {
    const {
      auctionId,
      vehicleId,
      token: temporaryToken,
      vehicleMake: { value: carMakeId },
      vehicleModel: { value: carModelId },
      varient: { value: carVarientId },
      transmission: { value: transmission },
      derivative: { value: carDerivativeId },
      dateOfFirstRegistration: dateOfRegistration,
    } = data;
    const body = {
      temporaryToken,
      carMakeId,
      carModelId,
      carVarientId,
      carDerivativeId,
      transmission,
      dateOfRegistration,
    };

    return this.client.patch(`${this.resourceUrl}/${auctionId}/${vehicleId}`, body);
  };

  update = (id, data) => this.client.put(`${this.resourceUrl}/vehicle-details/${id}`, data);

  delete = id => this.client.delete(`${this.resourceUrl}/vehicle-details/${id}`);

  selectPackage = (auctionId, body) => this.client.post(`${this.resourceUrl}/${auctionId}/payment`, body);

  getAuctionOverview = (auctionId, data) => {
    const params = queryString.stringify(
      {
        ...data,
      },
      { arrayFormat: 'bracket' },
    );
    return this.client.get(`${this.resourceUrl}/${auctionId}/overview`, params);
  };

  createAccount = (auctionId, data) => this.client.post(`${this.resourceUrl}/${auctionId}/account`, data);

  activate = auctionId => this.client.post(`${this.resourceUrl}/${auctionId}/activate`);

  getDraftedData = (auctionId, data) =>
    this.client.get(
      `${this.resourceUrl}/${auctionId}/drafted-data`,
      addCacheResistanceToParams(queryString.stringify(data)),
    );

  removePhotosFromStep = (auctionId, imageId, data) =>
    this.client.delete(`${this.resourceUrl}/${auctionId}/photos/${imageId}`, data);
}
