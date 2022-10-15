import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const ReviewsCarouselArrow = ({ className, onClick, type }) => (
  <div
    role="button"
    tabIndex="-1"
    className={cn(`${className}`, { 'btn-next': type === 'next' }, { 'btn-prev': type === 'prev' })}
    onClick={onClick}
    onKeyUp={() => {}}
  />
);

ReviewsCarouselArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
};

ReviewsCarouselArrow.defaultProps = {
  className: '',
};

export default ReviewsCarouselArrow;
