import React from 'react';
import PropTypes from 'prop-types';

import TypesFilter from 'components/filterHead/typesFilter';
import ViewFilter from 'components/filterHead//viewFilter';
import LocationFilter from 'components/filterHead/locationFilter';
import Select from 'components/commonSelector/commonSelector';
import { THEMES } from 'components/commonSelector/constans';
import { SORT_BY_VALUES } from 'constants/auction';

const FiltersHeadView = ({
  isAllListingsSelected,
  onAllListingsSelect,
  isAuctionListingsSelected,
  onAuctionListingsSelect,
  isMarkedForScrapListingsSelected,
  onMarkedForScrapListingsSelect,
  isLargeViewGridFormat,
  onViewGridFormatChange,
  sortBySelectedOption,
  sortByOptions,
  handleSortByChange,
  firstItemIndex,
  totalNumberOfAuctions,
  lastItemIndex,
  postcodeFilter,
}) => (
  <div className="filters-head">
    <div className="bar">
      <TypesFilter
        isAllListingsSelected={isAllListingsSelected}
        onAllListingsSelect={onAllListingsSelect}
        isAuctionListingsSelected={isAuctionListingsSelected}
        onAuctionListingsSelect={onAuctionListingsSelect}
        isMarkedForScrapListingsSelected={isMarkedForScrapListingsSelected}
        onMarkedForScrapListingsSelect={onMarkedForScrapListingsSelect}
      />
      <div className="filters-holder">
        <div className="form-group">
          <span className="label">View</span>
          <ViewFilter isLargeViewGridFormat={isLargeViewGridFormat} onViewGridFormatChange={onViewGridFormatChange} />
        </div>
        <div className="form-group">
          <span>Sort by:</span>
          <div className="input-group">
            <Select
              value={sortBySelectedOption}
              options={sortByOptions}
              onSelect={handleSortByChange}
              theme={THEMES.liteAbsolute}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="bar">
      <span className="title">
        Showing results {firstItemIndex} -
        {totalNumberOfAuctions < lastItemIndex ? totalNumberOfAuctions : lastItemIndex} of {totalNumberOfAuctions}
      </span>
      {sortBySelectedOption.sortBy === SORT_BY_VALUES.NEAREST_FIRST && (
        <LocationFilter postcodeFilter={postcodeFilter} />
      )}
    </div>
  </div>
);

FiltersHeadView.propTypes = {
  isAllListingsSelected: PropTypes.bool.isRequired,
  isAuctionListingsSelected: PropTypes.bool.isRequired,
  isMarkedForScrapListingsSelected: PropTypes.bool.isRequired,
  isLargeViewGridFormat: PropTypes.bool.isRequired,
  onAllListingsSelect: PropTypes.func.isRequired,
  onAuctionListingsSelect: PropTypes.func.isRequired,
  onMarkedForScrapListingsSelect: PropTypes.func.isRequired,
  onViewGridFormatChange: PropTypes.func.isRequired,
  totalNumberOfAuctions: PropTypes.number,
  postcodeFilter: PropTypes.string.isRequired,
  sortBySelectedOption: PropTypes.shape({
    value: PropTypes.string,
    sortBy: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  sortByOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      sortBy: PropTypes.string,
      sortDir: PropTypes.string,
      label: PropTypes.string,
    }),
  ).isRequired,
  handleSortByChange: PropTypes.func.isRequired,
  firstItemIndex: PropTypes.number,
  lastItemIndex: PropTypes.number,
};

FiltersHeadView.defaultProps = {
  firstItemIndex: 0,
  totalNumberOfAuctions: 0,
  lastItemIndex: 0,
};

export default FiltersHeadView;
