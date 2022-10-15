import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';

const ReviewsCarouselHead = ({ reviewsCarouselHeaderLabel, reviewsCarouselHeaderMessage }) => (
  <Row className="gratitude__head">
    {reviewsCarouselHeaderLabel && (
      <h2 className="gratitudeHead__header" dangerouslySetInnerHTML={{ __html: reviewsCarouselHeaderLabel }} />
    )}
    {reviewsCarouselHeaderMessage && (
      <p className="gratitudeHead__text" dangerouslySetInnerHTML={{ __html: reviewsCarouselHeaderMessage }} />
    )}
  </Row>
);

ReviewsCarouselHead.propTypes = {
  reviewsCarouselHeaderLabel: PropTypes.string,
  reviewsCarouselHeaderMessage: PropTypes.string,
};

export default ReviewsCarouselHead;
