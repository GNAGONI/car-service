import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import NextButton from 'components/MultiStep/NextButton';
import MultiStepControlButtons from 'components/MultiStep/MultiStepControlButtons';

class ControlButtons extends PureComponent {
  render() {
    const { nextButtonText, goBack, isNextButtonDisabled, restart, isBackButtonHidden, showNextButton } = this.props;

    return (
      <>
        {showNextButton && <NextButton isNextButtonDisabled={isNextButtonDisabled} nextButtonText={nextButtonText} />}
        <MultiStepControlButtons goBack={goBack} restart={restart} isBackButtonHidden={isBackButtonHidden} />
      </>
    );
  }
}

ControlButtons.propTypes = {
  nextButtonText: PropTypes.string,
  goBack: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired,
  isNextButtonDisabled: PropTypes.bool,
  showNextButton: PropTypes.bool,
  isBackButtonHidden: PropTypes.bool,
};

ControlButtons.defaultProps = {
  nextButtonText: '',
  isNextButtonDisabled: false,
  showNextButton: true,
  isBackButtonHidden: false,
};

export default ControlButtons;
