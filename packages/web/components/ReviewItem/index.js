import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

import Rating from 'components/ratingStars';

const ReviewItem = ({ text, fullName, location, rating, maxRating }) => (
  <Col className="box-testimonial text-center">
    <blockquote>
      <q>{text}</q>
      <cite>
        <strong>
          {fullName} - {location}
        </strong>
      </cite>
      <Rating rating={rating} maxRating={maxRating} />
    </blockquote>
  </Col>
);

ReviewItem.propTypes = {
  text: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  maxRating: PropTypes.number,
};

ReviewItem.defaultProps = {
  maxRating: 5,
};

export default ReviewItem;
