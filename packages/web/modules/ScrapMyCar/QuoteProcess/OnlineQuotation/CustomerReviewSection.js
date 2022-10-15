import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from 'components/ReviewItem';

const CustomerReviewSection = ({ title, text, fullName, location, rating }) => (
  <>
    {title && (
      <div className="review-title">
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
    )}
    <ReviewItem text={text} fullName={fullName} location={location} rating={rating} />
  </>
);

CustomerReviewSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default CustomerReviewSection;
