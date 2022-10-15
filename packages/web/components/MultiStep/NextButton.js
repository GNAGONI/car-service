import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const NextButton = ({ isNextButtonDisabled, nextButtonText }) => (
  <div className="btn-block text-center submit-button">
    <Button type="submit" variant="primary" disabled={isNextButtonDisabled}>
      {nextButtonText}
    </Button>
  </div>
);

NextButton.propTypes = {
  nextButtonText: PropTypes.string,
  isNextButtonDisabled: PropTypes.bool,
};

NextButton.defaultProps = {
  nextButtonText: '',
  isNextButtonDisabled: false,
};

export default NextButton;
