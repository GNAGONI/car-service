import queryString from 'query-string';

import { addCacheResistanceToParams } from '../lib/cache';
import {
  checkFilterNearest,
  checkFiltersArray,
  checkFiltersArrayWithValue,
  checkFilterString,
} from '../lib/filter';

export default class Auctions {
  constructor(client) {
    this.client = client;
    this.resourceUrl = '/auctions';
  }

  list = props => {
    const {
      carMakeFilters,
      carModelFilters,
      colorFilters,
      fuelFilters,
      mileageFilters,
      modelYearFilters,
      transmissionFilters,
      regionFilters,
      areaFilters,
      cityFilters,
      phraseFilter,
      postcodeFilter,
      limit,
      offset,
      sortBy,
      sortDir,
    } = props;

    // TODO: sync names with back from xxxxFilter to xxxxFilters
    const filters = {
      carMakeFilter: checkFiltersArrayWithValue(carMakeFilters),
      carModelFilter: checkFiltersArrayWithValue(carModelFilters),
      colourFilter: checkFiltersArrayWithValue(colorFilters),
      fuelFilter: checkFiltersArrayWithValue(fuelFilters),
      mileageFilter: checkFiltersArray(mileageFilters),
      yearFilter: checkFiltersArrayWithValue(modelYearFilters),
      transmissionFilter: checkFiltersArrayWithValue(transmissionFilters),
      regionFilter: checkFilterString(regionFilters),
      areaFilter: checkFilterString(areaFilters),
      cityFilter: checkFilterString(cityFilters),
      phraseFilter: checkFilterString(phraseFilter),
      postcodeFilter: checkFilterNearest(postcodeFilter, sortBy),
    };
    const params = queryString.stringify(
      {
        ...filters,
        limit,
        offset,
        sortBy,
        sortDir,
      },
      { arrayFormat: 'bracket' },
    );
    const cacheResistanceParams = addCacheResistanceToParams(params);

    return this.client.get(`${this.resourceUrl}/filter`, cacheResistanceParams);
  };

  retrieve = (id, filter) => this.client.get(`${this.resourceUrl}/${id}`, filter);

  create = data => this.client.post(this.resourceUrl, data);

  update = (id, data) => this.client.put(`${this.resourceUrl}/${id}`, data);

  delete = id => this.client.delete(`${this.resourceUrl}/${id}`);

  getSecondStageInitialData = () => {};

  getPostcodeInitialData = () => {};

  getThirdStageInitialData = () => {};

  getMockCarAuctionResultsData = () => {};
}
