import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const TypesFilter = ({
  isAllListingsSelected,
  onAllListingsSelect,
  isAuctionListingsSelected,
  onAuctionListingsSelect,
  isMarkedForScrapListingsSelected,
  onMarkedForScrapListingsSelect,
}) => (
  <ul className="btn-selection">
    <li className={cn({ active: isAllListingsSelected })} onClick={onAllListingsSelect} role="presentation">
      <span>All listings</span>
    </li>
    <li className={cn({ active: isAuctionListingsSelected })} onClick={onAuctionListingsSelect} role="presentation">
      <span>Auction</span>
    </li>
    <li
      className={cn({ active: isMarkedForScrapListingsSelected })}
      onClick={onMarkedForScrapListingsSelect}
      role="presentation"
    >
      <span>Marked for scrap</span>
    </li>
  </ul>
);

TypesFilter.propTypes = {
  isAllListingsSelected: PropTypes.bool.isRequired,
  isAuctionListingsSelected: PropTypes.bool.isRequired,
  isMarkedForScrapListingsSelected: PropTypes.bool.isRequired,
  onAllListingsSelect: PropTypes.func.isRequired,
  onAuctionListingsSelect: PropTypes.func.isRequired,
  onMarkedForScrapListingsSelect: PropTypes.func.isRequired,
};

export default TypesFilter;
