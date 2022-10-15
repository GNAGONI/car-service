import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'next/router';
import {
  auctionsSelector,
  filtersSelector,
  availableCarMakeFiltersSelector,
  availableCarModelFiltersSelector,
  availableModelYearFiltersSelector,
  availableColorFiltersSelector,
  availableMileageFiltersSelector,
  availableTransmissionFiltersSelector,
  availableFuelFiltersSelector,
  isAllListingsSelectedSelector,
  isAuctionListingsSelectedSelector,
  isMarkedForScrapListingsSelectedSelector,
  pageCountSelector,
  displayPerPageSelector,
  offsetSelector,
  totalNumberOfAuctionsSelector,
  pageNumberSelector,
} from '@car-service/redux/selectors/auctions';
import {
  changeLocationRegionFilters,
  changeLocationAreaFilters,
  changeLocationCityFilters,
} from '@car-service/redux/actions/location';
import {
  getAuctionsRequest,
  changeCarMakesFilters,
  changeCarModelsFilters,
  changeModelYearFilters,
  changeColorFilters,
  changeMileageFiltersProgress,
  changeMileageFiltersFinish,
  changeTransmissionFilters,
  changeFuelFilters,
  changeAllFilters,
  selectAllListings,
  selectAuctionListings,
  selectMarkedForScrapListings,
  sortByChange,
  pageChange,
  auctionsDisplayPerPageChange,
} from '@car-service/redux/actions/auctions';

import AuctionSearchFilter from 'components/carAuctionResults/auctionSearchFilter';
import AuctionPost from 'components/carAuctionResults/auctionPost';
import FiltersHead from 'containers/filtersHead';
import PaginationSection from 'components/carAuctionResults/paginationSection';
import { makeFilterOptions, mapOptionsToValues, checkFilter } from 'lib/auction';
import { FILTER_VALUE_NAMES, FILTER_NAMES, FILTER_STORE_NAMES } from 'constants/auction';

const displayPerPageOptionsCompact = [30, 45, 60, 75];
const displayPerPageOptionsLarge = [40, 60, 80, 100];

class AuctionSection extends PureComponent {
  static propTypes = {
    auctions: PropTypes.arrayOf(PropTypes.string).isRequired,
    onGetAuctionsRequest: PropTypes.func.isRequired,

    availableCarMakeFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    availableCarModelFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    availableModelYearFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    availableColorFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    availableMileageFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    availableTransmissionFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    availableFuelFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    defaultCarMakeFilterValue: PropTypes.shape({
      carMakeName: PropTypes.string,
      numberOfItems: PropTypes.string,
    }),
    presetFilters: PropTypes.shape({
      carMake: PropTypes.arrayOf(PropTypes.string),
      carModel: PropTypes.arrayOf(PropTypes.string),
      carModelYear: PropTypes.arrayOf(PropTypes.string),
      carColour: PropTypes.arrayOf(PropTypes.string),
      carTransmission: PropTypes.arrayOf(PropTypes.string),
      carFuel: PropTypes.arrayOf(PropTypes.string),
    }),
    hideFilters: PropTypes.shape({
      carMake: PropTypes.bool,
      carModel: PropTypes.bool,
      carModelYear: PropTypes.bool,
      carColour: PropTypes.bool,
      carTransmission: PropTypes.bool,
      carFuel: PropTypes.bool,
      carMileage: PropTypes.bool,
    }),
    onChangeCarMakeFilter: PropTypes.func.isRequired,
    onChangeCarModelFilter: PropTypes.func.isRequired,
    onChangeModelYearFilter: PropTypes.func.isRequired,
    onChangeColorFilter: PropTypes.func.isRequired,
    onChangeMileageFilter: PropTypes.func.isRequired,
    onChangeTransmissionFilter: PropTypes.func.isRequired,
    onChangeFuelFilter: PropTypes.func.isRequired,
    onChangeLocationRegionFilters: PropTypes.func.isRequired,
    onChangeLocationAreaFilters: PropTypes.func.isRequired,
    onChangeLocationCityFilters: PropTypes.func.isRequired,
    onChangeAllFilters: PropTypes.func.isRequired,
    onAfterChangeMileageFilter: PropTypes.func.isRequired,

    isAllListingsSelected: PropTypes.bool.isRequired,
    isAuctionListingsSelected: PropTypes.bool.isRequired,
    isMarkedForScrapListingsSelected: PropTypes.bool.isRequired,

    onAllListingsSelect: PropTypes.func.isRequired,
    onAuctionListingsSelect: PropTypes.func.isRequired,
    onMarkedForScrapListingsSelect: PropTypes.func.isRequired,

    onSortByChange: PropTypes.func.isRequired,

    pageCount: PropTypes.number.isRequired,
    displayPerPage: PropTypes.number.isRequired,
    pageNumber: PropTypes.number.isRequired,

    onPageChange: PropTypes.func.isRequired,
    onAuctionsDisplayPerPageChange: PropTypes.func.isRequired,
    router: PropTypes.shape,
    offset: PropTypes.number,
    totalNumberOfAuctions: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    filters: PropTypes.shape({
      allListings: PropTypes.bool,
      auctionListings: PropTypes.bool,
      carMakeFilters: PropTypes.array,
      carModelFilters: PropTypes.array,
      colorFilters: PropTypes.array,
      fuelFilters: PropTypes.array,
      markedForScrapListings: PropTypes.bool,
      mileageFilters: PropTypes.array,
      modelYearFilters: PropTypes.array,
      phraseFilter: PropTypes.array,
      postcodeFilter: PropTypes.string,
      regionFilters: PropTypes.array,
      transmissionFilters: PropTypes.array,
    }),
  };

  static defaultProps = {
    title: '',
    description: '',
    router: {
      query: {},
    },
    offset: 0,
    totalNumberOfAuctions: 0,
    defaultCarMakeFilterValue: null,
    presetFilters: {},
    hideFilters: {
      carMake: false,
      carModel: false,
      carModelYear: false,
      carColour: false,
      carTransmission: false,
      carFuel: false,
      carMileage: false,
    },
  };

  refToScroll = React.createRef();

  state = {
    isLargeViewGridFormat: false,
    auctionsPerPageOptions: displayPerPageOptionsCompact,
  };

  componentDidMount() {
    const { onGetAuctionsRequest, presetFilters, filters } = this.props;
    const queryParams = this.getQueryParams();

    const usedFilters = Object.values(filters).filter(filter => Array.isArray(filter) && filter.length);
    const shouldSavedFiltersBeUsed = usedFilters.length > 0;

    if (shouldSavedFiltersBeUsed) {
      this.setFiltersToStore(filters);
    } else {
      this.setQueryToStore(queryParams);
      this.setPresetFiltersToStore(presetFilters);
    }
    onGetAuctionsRequest();
  }

  setQueryToStore = queryParams => {
    const { carMake, carModel, colour, fuel, mileage, modelYear, transmission, region, area, location } = queryParams;
    const {
      onChangeCarMakeFilter,
      onChangeCarModelFilter,
      onChangeModelYearFilter,
      onChangeColorFilter,
      onChangeTransmissionFilter,
      onChangeFuelFilter,
    } = this.props;

    const filtersArray = [
      {
        filters: checkFilter(carMake),
        filterName: FILTER_NAMES.carMake,
        filterValuesName: FILTER_VALUE_NAMES.carMake,
        filterHandler: onChangeCarMakeFilter,
        filterStoreName: FILTER_STORE_NAMES.carMake,
      },
      {
        filters: checkFilter(colour),
        filterName: FILTER_NAMES.carColour,
        filterValuesName: FILTER_VALUE_NAMES.carColour,
        filterHandler: onChangeColorFilter,
        filterStoreName: FILTER_STORE_NAMES.carColour,
      },
      {
        filters: checkFilter(fuel),
        filterName: FILTER_NAMES.carFuel,
        filterValuesName: FILTER_VALUE_NAMES.carFuel,
        filterHandler: onChangeFuelFilter,
        filterStoreName: FILTER_STORE_NAMES.carFuel,
      },
      {
        filters: checkFilter(carModel),
        filterName: FILTER_NAMES.carModel,
        filterValuesName: FILTER_VALUE_NAMES.carModel,
        filterHandler: onChangeCarModelFilter,
        filterStoreName: FILTER_STORE_NAMES.carModel,
      },
      {
        filters: checkFilter(modelYear),
        filterName: FILTER_NAMES.carModelYear,
        filterValuesName: FILTER_VALUE_NAMES.carModelYear,
        filterHandler: onChangeModelYearFilter,
        filterStoreName: FILTER_STORE_NAMES.carModelYear,
      },
      {
        filters: checkFilter(transmission),
        filterName: FILTER_NAMES.carTransmission,
        filterValuesName: FILTER_VALUE_NAMES.carTransmission,
        filterHandler: onChangeTransmissionFilter,
        filterStoreName: FILTER_STORE_NAMES.carTransmission,
      },
    ];

    const filters = filtersArray.filter(filter => filter.filters !== '');
    filters.forEach(filter => {
      this.loadArrayQueryToFilter(filter);
    });

    this.props.onChangeLocationRegionFilters(region);
    this.props.onChangeLocationAreaFilters(area);
    this.props.onChangeLocationCityFilters(location);
    this.loadLocation(region);

    const loadRangeQueryToFilter = ({ range, rangeHandler }) => {
      if (!Array.isArray(range) || typeof rangeHandler !== 'function') {
        return;
      }

      const rangeFilterOption = range.map(Number);

      rangeHandler(rangeFilterOption);
    };

    loadRangeQueryToFilter({
      range: mileage,
      rangeHandler: this.handleMileageFilterAfterChange,
    });
  };

  setFiltersToStore = filters => {
    const {
      carMakeFilters,
      carModelFilters,
      colorFilters,
      fuelFilters,
      mileageFilters,
      modelYearFilters,
      transmissionFilters,
      region,
      area,
      location,
    } = filters;
    const {
      onChangeCarMakeFilter,
      onChangeCarModelFilter,
      onChangeModelYearFilter,
      onChangeColorFilter,
      onChangeTransmissionFilter,
      onChangeFuelFilter,
      onChangeAllFilters,
    } = this.props;

    const filtersArray = [
      {
        filters: carMakeFilters,
        filterName: FILTER_NAMES.carMake,
        filterValuesName: FILTER_VALUE_NAMES.carMake,
        filterHandler: onChangeCarMakeFilter,
        filterStoreName: FILTER_STORE_NAMES.carMake,
      },
      {
        filters: colorFilters,
        filterName: FILTER_NAMES.carColour,
        filterValuesName: FILTER_VALUE_NAMES.carColour,
        filterHandler: onChangeColorFilter,
        filterStoreName: FILTER_STORE_NAMES.carColour,
      },
      {
        filters: fuelFilters,
        filterName: FILTER_NAMES.carFuel,
        filterValuesName: FILTER_VALUE_NAMES.carFuel,
        filterHandler: onChangeFuelFilter,
        filterStoreName: FILTER_STORE_NAMES.carFuel,
      },
      {
        filters: carModelFilters,
        filterName: FILTER_NAMES.carModel,
        filterValuesName: FILTER_VALUE_NAMES.carModel,
        filterHandler: onChangeCarModelFilter,
        filterStoreName: FILTER_STORE_NAMES.carModel,
      },
      {
        filters: modelYearFilters,
        filterName: FILTER_NAMES.carModelYear,
        filterValuesName: FILTER_VALUE_NAMES.carModelYear,
        filterHandler: onChangeModelYearFilter,
        filterStoreName: FILTER_STORE_NAMES.carModelYear,
      },
      {
        filters: transmissionFilters,
        filterName: FILTER_NAMES.carTransmission,
        filterValuesName: FILTER_VALUE_NAMES.carTransmission,
        filterHandler: onChangeTransmissionFilter,
        filterStoreName: FILTER_STORE_NAMES.carTransmission,
      },
    ];

    const filteredFilters = filtersArray.filter(filter => filter.filters !== '');
    const formattedFilters = filteredFilters.map(item => {
      if (!Array.isArray(item.filters) || !item.filterName) {
        return [];
      }

      const filterFormatted = item.filters.map(filter => ({ [item.filterName]: filter }));
      const filterOptions = makeFilterOptions(filterFormatted);
      const values = mapOptionsToValues(filterOptions);

      this.setState({
        [item.filterValuesName]: filterOptions,
      });

      return {
        name: item.filterStoreName,
        value: values,
      };
    });

    onChangeAllFilters(formattedFilters);
    this.props.onChangeLocationRegionFilters(region);
    this.props.onChangeLocationAreaFilters(area);
    this.props.onChangeLocationCityFilters(location);
    this.loadLocation(region);

    const loadRangeQueryToFilter = ({ range, rangeHandler }) => {
      if (!Array.isArray(range) || typeof rangeHandler !== 'function') {
        return;
      }

      const rangeFilterOption = range.map(Number);

      rangeHandler(rangeFilterOption);
    };

    loadRangeQueryToFilter({
      range: mileageFilters,
      rangeHandler: this.handleMileageFilterAfterChange,
    });
  };

  loadLocation = region => {
    const { onChangeLocationRegionFilters } = this.props;

    onChangeLocationRegionFilters(region);
  };

  loadArrayQueryToFilter = ({ filters, filterName, filterValuesName, filterHandler }) => {
    if (!Array.isArray(filters) || !filterName || typeof filterHandler !== 'function') {
      return;
    }

    const filterFormatted = filters.map(filter => ({ [filterName]: filter }));
    const filterOptions = makeFilterOptions(filterFormatted);

    this.handleFilterChange({
      options: filterOptions,
      filterValuesName,
      onChangeFilter: filterHandler,
    });
  };

  getQueryParams = () => {
    const {
      router: { asPath },
    } = this.props;
    const query = asPath.split('?')[1];
    return queryString.parse(query, { arrayFormat: 'bracket' });
  };

  setPresetFiltersToStore = presetFilters => {
    const { carMake, carModel, colour, fuel, modelYear, transmission } = presetFilters;
    const {
      onChangeCarMakeFilter,
      onChangeCarModelFilter,
      onChangeModelYearFilter,
      onChangeColorFilter,
      onChangeTransmissionFilter,
      onChangeFuelFilter,
    } = this.props;

    const filtersArray = [
      {
        filters: checkFilter(carMake),
        filterName: FILTER_NAMES.carMake,
        filterValuesName: FILTER_VALUE_NAMES.carMake,
        filterHandler: onChangeCarMakeFilter,
      },
      {
        filters: checkFilter(colour),
        filterName: FILTER_NAMES.carColour,
        filterValuesName: FILTER_VALUE_NAMES.carColour,
        filterHandler: onChangeColorFilter,
      },
      {
        filters: checkFilter(fuel),
        filterName: FILTER_NAMES.carFuel,
        filterValuesName: FILTER_VALUE_NAMES.carFuel,
        filterHandler: onChangeFuelFilter,
      },
      {
        filters: checkFilter(carModel),
        filterName: FILTER_NAMES.carModel,
        filterValuesName: FILTER_VALUE_NAMES.carModel,
        filterHandler: onChangeCarModelFilter,
      },
      {
        filters: checkFilter(modelYear),
        filterName: FILTER_NAMES.carModelYear,
        filterValuesName: FILTER_VALUE_NAMES.carModelYear,
        filterHandler: onChangeModelYearFilter,
      },
      {
        filters: checkFilter(transmission),
        filterName: FILTER_NAMES.carTransmission,
        filterValuesName: FILTER_VALUE_NAMES.carTransmission,
        filterHandler: onChangeTransmissionFilter,
      },
    ];
    const filters = filtersArray.filter(filter => filter.filters !== '');

    filters.forEach(filter => {
      this.loadArrayQueryToFilter(filter);
    });
  };

  onViewGridFormatChange = isLargeViewGridFormat => {
    const { onAuctionsDisplayPerPageChange } = this.props;
    const auctionsPerPageOptions = isLargeViewGridFormat ? displayPerPageOptionsLarge : displayPerPageOptionsCompact;
    const displayPerPageDefault = auctionsPerPageOptions[0];

    this.setState({
      isLargeViewGridFormat,
      auctionsPerPageOptions,
    });
    onAuctionsDisplayPerPageChange(displayPerPageDefault);
  };

  renderAuctionPost = props => {
    const { id, watched, featured, images, carMake, carRange, numberOfBids, currentMaxBid, timeToEnd, year } = props;
    const name = `${year} ${carMake} ${carRange}`;
    const { isLargeViewGridFormat } = this.state;

    return (
      <AuctionPost
        isLargeViewGridFormat={isLargeViewGridFormat}
        isFeatured={featured}
        isWatched={watched}
        images={images}
        name={name}
        price={currentMaxBid || 0}
        numberOfBids={numberOfBids}
        timeRemaining={timeToEnd}
        id={id}
      />
    );
  };

  handleViewGridFormatChange = isLargeViewGridFormat => {
    const { onAuctionsDisplayPerPageChange } = this.props;
    const auctionsPerPageOptions = isLargeViewGridFormat ? displayPerPageOptionsCompact : displayPerPageOptionsLarge;

    this.setState({
      isLargeViewGridFormat,
      auctionsPerPageOptions,
    });

    onAuctionsDisplayPerPageChange(auctionsPerPageOptions[0]);
  };

  handleFilterChange = ({ options, filterValuesName, onChangeFilter }) => {
    if (typeof onChangeFilter !== 'function' || !Array.isArray(options) || !filterValuesName) {
      return;
    }
    onChangeFilter(options);
  };

  handleMileageFilterChange = option => {
    const { onChangeMileageFilter } = this.props;

    onChangeMileageFilter(option);
  };

  handleMileageFilterAfterChange = option => {
    const { onAfterChangeMileageFilter } = this.props;

    onAfterChangeMileageFilter(option);
  };

  handlePageChange = selected => {
    const { onPageChange, displayPerPage } = this.props;
    const offset = selected * displayPerPage;

    this.refToScroll.current.scrollIntoView();
    onPageChange(offset);
  };

  handleAuctionsDisplayPerPageChange = numberOfAuctionsPerPage => {
    const { onAuctionsDisplayPerPageChange } = this.props;

    this.refToScroll.current.scrollIntoView();
    onAuctionsDisplayPerPageChange(numberOfAuctionsPerPage);
  };

  render() {
    const {
      auctions,

      availableCarMakeFilters,
      availableCarModelFilters,
      availableModelYearFilters,
      availableColorFilters,
      availableMileageFilters,
      availableTransmissionFilters,
      availableFuelFilters,

      isAllListingsSelected,
      isAuctionListingsSelected,
      isMarkedForScrapListingsSelected,

      pageCount,
      displayPerPage,
      offset,
      totalNumberOfAuctions,
      pageNumber,

      onAllListingsSelect,
      onAuctionListingsSelect,
      onMarkedForScrapListingsSelect,
      onSortByChange,
      onChangeCarMakeFilter,
      onChangeCarModelFilter,
      onChangeModelYearFilter,
      onChangeColorFilter,
      onChangeMileageFilter,
      onChangeTransmissionFilter,
      onChangeFuelFilter,
      title,
      description,
      defaultCarMakeFilterValue,

      presetFilters,
      hideFilters,

      filters: {
        carMakeFilters,
        carModelFilters,
        colorFilters,
        fuelFilters,
        mileageFilters,
        modelYearFilters,
        transmissionFilters,
      },
    } = this.props;

    const { isLargeViewGridFormat, auctionsPerPageOptions } = this.state;

    return (
      <section className="content section-auction bg-before-default extend">
        <div ref={this.refToScroll}>
          <AuctionSearchFilter
            title={title}
            description={description}
            // Options for filters
            availableCarMakeFilters={availableCarMakeFilters}
            availableCarModelFilters={availableCarModelFilters}
            availableModelYearFilters={availableModelYearFilters}
            availableColorFilters={availableColorFilters}
            availableMileageFilters={availableMileageFilters}
            availableTransmissionFilters={availableTransmissionFilters}
            availableFuelFilters={availableFuelFilters}
            // User inserted values in filters
            carMakeFilterValues={carMakeFilters || defaultCarMakeFilterValue}
            carModelFilterValues={carModelFilters}
            modelYearFilterValues={modelYearFilters}
            colorFilterValue={colorFilters}
            TransmissionFilterValue={transmissionFilters}
            fuelFilterValue={fuelFilters}
            mileageFilterValue={mileageFilters}
            // Handlers for mileage range
            handleMileageFilterChange={this.handleMileageFilterChange}
            handleMileageFilterAfterChange={this.handleMileageFilterAfterChange}
            // Common filter handler
            handleFilterChange={this.handleFilterChange}
            // Handlers for filters changes
            onChangeCarMakeFilter={onChangeCarMakeFilter}
            onChangeCarModelFilter={onChangeCarModelFilter}
            onChangeModelYearFilter={onChangeModelYearFilter}
            onChangeColorFilter={onChangeColorFilter}
            onChangeMileageFilter={onChangeMileageFilter}
            onChangeTransmissionFilter={onChangeTransmissionFilter}
            onChangeFuelFilter={onChangeFuelFilter}
            // Presets for filters
            presetFilters={presetFilters}
            // Hidden filters
            hideFilters={hideFilters}
          />
        </div>
        <div className="content-holder bg-before-default">
          <FiltersHead
            isAllListingsSelected={isAllListingsSelected}
            isAuctionListingsSelected={isAuctionListingsSelected}
            isMarkedForScrapListingsSelected={isMarkedForScrapListingsSelected}
            isLargeViewGridFormat={isLargeViewGridFormat}
            displayPerPage={displayPerPage}
            offset={offset}
            pageCount={pageCount}
            totalNumberOfAuctions={totalNumberOfAuctions}
            pageNumber={pageNumber}
            onAllListingsSelect={onAllListingsSelect}
            onAuctionListingsSelect={onAuctionListingsSelect}
            onMarkedForScrapListingsSelect={onMarkedForScrapListingsSelect}
            onViewGridFormatChange={this.onViewGridFormatChange}
            onSortByChange={onSortByChange}
          />

          <Row>{auctions && auctions.map(post => this.renderAuctionPost(post))}</Row>

          <PaginationSection
            pageCount={pageCount}
            pageNumber={pageNumber}
            auctionsPerPageOptions={auctionsPerPageOptions}
            onPageChange={this.handlePageChange}
            onAuctionsDisplayPerPageChange={this.handleAuctionsDisplayPerPageChange}
            displayPerPage={displayPerPage}
          />
        </div>
      </section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  auctions: auctionsSelector,
  filters: filtersSelector,
  availableCarMakeFilters: availableCarMakeFiltersSelector,
  availableCarModelFilters: availableCarModelFiltersSelector,
  availableModelYearFilters: availableModelYearFiltersSelector,
  availableColorFilters: availableColorFiltersSelector,
  availableMileageFilters: availableMileageFiltersSelector,
  availableTransmissionFilters: availableTransmissionFiltersSelector,
  availableFuelFilters: availableFuelFiltersSelector,

  isAllListingsSelected: isAllListingsSelectedSelector,
  isAuctionListingsSelected: isAuctionListingsSelectedSelector,
  isMarkedForScrapListingsSelected: isMarkedForScrapListingsSelectedSelector,

  pageCount: pageCountSelector,
  offset: offsetSelector,
  totalNumberOfAuctions: totalNumberOfAuctionsSelector,
  displayPerPage: displayPerPageSelector,
  pageNumber: pageNumberSelector,
});

const mapDispatchToProps = dispatch => ({
  onGetAuctionsRequest: () => dispatch(getAuctionsRequest()),

  onChangeCarMakeFilter: filters => dispatch(changeCarMakesFilters(filters)),
  onChangeCarModelFilter: filters => dispatch(changeCarModelsFilters(filters)),
  onChangeModelYearFilter: filters => dispatch(changeModelYearFilters(filters)),
  onChangeColorFilter: filters => dispatch(changeColorFilters(filters)),
  onChangeMileageFilter: filters => dispatch(changeMileageFiltersProgress(filters)),
  onAfterChangeMileageFilter: filters => dispatch(changeMileageFiltersFinish(filters)),
  onChangeTransmissionFilter: filters => dispatch(changeTransmissionFilters(filters)),
  onChangeFuelFilter: filters => dispatch(changeFuelFilters(filters)),
  onChangeAllFilters: filters => dispatch(changeAllFilters(filters)),
  onChangeLocationRegionFilters: filters => dispatch(changeLocationRegionFilters(filters)),
  onChangeLocationAreaFilters: filters => dispatch(changeLocationAreaFilters(filters)),
  onChangeLocationCityFilters: filters => dispatch(changeLocationCityFilters(filters)),

  onAllListingsSelect: () => dispatch(selectAllListings()),
  onAuctionListingsSelect: () => dispatch(selectAuctionListings()),
  onMarkedForScrapListingsSelect: () => dispatch(selectMarkedForScrapListings()),
  onSortByChange: parameter => dispatch(sortByChange(parameter)),

  onPageChange: offset => dispatch(pageChange(offset)),
  onAuctionsDisplayPerPageChange: numberOfAuctionsPerPage =>
    dispatch(auctionsDisplayPerPageChange(numberOfAuctionsPerPage)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
)(AuctionSection);
