import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const ViewFilter = ({ isLargeViewGridFormat, onViewGridFormatChange }) => (
  <ul className="filter-links">
    <li
      className={cn({ active: !isLargeViewGridFormat })}
      onClick={() => onViewGridFormatChange(false)}
      role="presentation"
    >
      <a data-mode="12" data-mode-md="6" data-mode-lg="4" className="icon-thumbnail2">
        <span className="sr-only">Thumbnail 9</span>
      </a>
    </li>
    <li
      className={cn({ active: isLargeViewGridFormat })}
      onClick={() => onViewGridFormatChange(true)}
      role="presentation"
    >
      <a data-mode="6" data-mode-md="4" data-mode-lg="3" className="icon-thumbnail">
        <span className="sr-only">Thumbnail 12</span>
      </a>
    </li>
  </ul>
);

ViewFilter.propTypes = {
  isLargeViewGridFormat: PropTypes.bool.isRequired,
  onViewGridFormatChange: PropTypes.func.isRequired,
};

export default ViewFilter;
