import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const MultiStepControlButtons = ({ goBack, restart, isBackButtonHidden }) => (
  <div className="btn-block bordered">
    <Button onClick={restart} variant="dark">
      Restart
    </Button>
    {!isBackButtonHidden && (
      <Button onClick={goBack} variant="dark">
        Go back
      </Button>
    )}
  </div>
);

MultiStepControlButtons.propTypes = {
  goBack: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired,
  isBackButtonHidden: PropTypes.bool,
};

MultiStepControlButtons.defaultProps = {
  isBackButtonHidden: false,
};

export default MultiStepControlButtons;
