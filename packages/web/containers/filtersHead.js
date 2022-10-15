import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import FiltersHeadView from 'components/filterHead/index';
import geolocated from 'components/geolocated';
import { getPostcodeByLocationRequest as getPostcodeByLocationRequestAction } from '@car-service/redux/actions';
import { postcodeFilterSelector } from '@car-service/redux/selectors/auctions';
import { SORT_BY_VALUES } from 'constants/auction';

const sortByOptions = [
  { value: 'Ending Soon', sortBy: SORT_BY_VALUES.ENDING_SOON, sortDir: 'asc', label: 'Ending Soon' },
  { value: 'Lowest Price', sortBy: SORT_BY_VALUES.LOWEST_PRICE, sortDir: 'asc', label: 'Lowest Price' },
  { value: 'Highest Price', sortBy: SORT_BY_VALUES.HIGHEST_PRICE, sortDir: 'desc', label: 'Highest Price' },
  { value: 'Nearest First', sortBy: SORT_BY_VALUES.NEAREST_FIRST, label: 'Nearest First' },
  { value: 'Newly listed', sortBy: SORT_BY_VALUES.NEWLY_LISTED, sortDir: 'desc', label: 'Newly listed' },
];

class FiltersHead extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sortBySelectedOption: sortByOptions[0],
    };
  }

  handleSortByChange = ({ value, label, sortBy, sortDir }) => {
    this.setState({ sortBySelectedOption: { value, label, sortBy } });
    if (sortBy === SORT_BY_VALUES.NEAREST_FIRST) {
      this.handleLocationFilter();
    } else {
      this.props.onSortByChange({ sortBy, sortDir });
    }
  };

  handleLocationFilter = () => {
    const {
      getLocation,
      coords,
      isGeolocationAvailable,
      isGeolocationEnabled,
      onSortByChange,
      postcodeFilter,
    } = this.props;
    if (isGeolocationAvailable && isGeolocationEnabled && !coords) {
      getLocation();
    } else {
      onSortByChange({ sortBy: SORT_BY_VALUES.NEAREST_FIRST, postcodeFilter });
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.coords !== prevProps.coords) {
      const {
        getPostcodeByLocationRequest,
        coords: { latitude, longitude },
      } = this.props;
      getPostcodeByLocationRequest({ latitude, longitude });
    } else if (
      this.props.postcodeFilter !== prevProps.postcodeFilter &&
      this.state.sortBySelectedOption.sortBy === SORT_BY_VALUES.NEAREST_FIRST &&
      this.props.postcodeFilter
    ) {
      this.props.onSortByChange({ sortBy: SORT_BY_VALUES.NEAREST_FIRST, postcodeFilter: this.props.postcodeFilter });
    }
  }

  render() {
    const {
      isAllListingsSelected,
      isAuctionListingsSelected,
      isMarkedForScrapListingsSelected,
      isLargeViewGridFormat,
      onAllListingsSelect,
      onAuctionListingsSelect,
      onMarkedForScrapListingsSelect,
      onViewGridFormatChange,
      displayPerPage,
      totalNumberOfAuctions,
      pageNumber,
      postcodeFilter,
    } = this.props;
    const { sortBySelectedOption } = this.state;
    const firstItemIndex = totalNumberOfAuctions ? pageNumber * displayPerPage + 1 : 0;
    const lastItemIndex = pageNumber * displayPerPage + displayPerPage;

    return (
      <FiltersHeadView
        isAllListingsSelected={isAllListingsSelected}
        onAllListingsSelect={onAllListingsSelect}
        isAuctionListingsSelected={isAuctionListingsSelected}
        onAuctionListingsSelect={onAuctionListingsSelect}
        isMarkedForScrapListingsSelected={isMarkedForScrapListingsSelected}
        onMarkedForScrapListingsSelect={onMarkedForScrapListingsSelect}
        isLargeViewGridFormat={isLargeViewGridFormat}
        onViewGridFormatChange={onViewGridFormatChange}
        firstItemIndex={firstItemIndex}
        sortBySelectedOption={sortBySelectedOption}
        sortByOptions={sortByOptions}
        totalNumberOfAuctions={totalNumberOfAuctions}
        lastItemIndex={lastItemIndex}
        handleSortByChange={this.handleSortByChange}
        postcodeFilter={postcodeFilter}
      />
    );
  }
}

FiltersHead.propTypes = {
  isAllListingsSelected: PropTypes.bool.isRequired,
  isAuctionListingsSelected: PropTypes.bool.isRequired,
  isMarkedForScrapListingsSelected: PropTypes.bool.isRequired,
  isLargeViewGridFormat: PropTypes.bool.isRequired,
  onAllListingsSelect: PropTypes.func.isRequired,
  onAuctionListingsSelect: PropTypes.func.isRequired,
  onMarkedForScrapListingsSelect: PropTypes.func.isRequired,
  onViewGridFormatChange: PropTypes.func.isRequired,
  onSortByChange: PropTypes.func.isRequired,
  displayPerPage: PropTypes.number,
  totalNumberOfAuctions: PropTypes.number,
  pageNumber: PropTypes.number,
  postcodeFilter: PropTypes.string.isRequired,
  getPostcodeByLocationRequest: PropTypes.func.isRequired,
  coords: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }),
  isGeolocationAvailable: PropTypes.bool,
  isGeolocationEnabled: PropTypes.bool,
  getLocation: PropTypes.func.isRequired,
};

FiltersHead.defaultProps = {
  displayPerPage: 0,
  totalNumberOfAuctions: 0,
  pageNumber: 0,
};

const mapDispatchToProps = dispatch => ({
  getPostcodeByLocationRequest: location => dispatch(getPostcodeByLocationRequestAction(location)),
});

export default connect(
  createStructuredSelector({
    postcodeFilter: postcodeFilterSelector,
  }),
  mapDispatchToProps,
)(geolocated({ suppressLocationOnMount: true })(FiltersHead));
