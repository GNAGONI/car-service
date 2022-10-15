import React from 'react';
import PropTypes from 'prop-types';

import { iconCalculator } from 'static/images/icons';
import BaseForm from './BaseForm';

const defaultCalculatorTitle = 'Scrap my car price <strong>calculator</strong>';
const defaultCalculatorText =
  'To get an accurate instant quote for your specific make and model, just enter your car registration and postcode.';

const CalculatorForm = ({ calculatorTitle, calculatorText }) => (
  <div className="calculator-form">
    <div className="head">
      <div className="ico">
        <img src={iconCalculator} alt="Price calculator" width="62" height="89" />
      </div>
      {calculatorTitle && <h2 dangerouslySetInnerHTML={{ __html: calculatorTitle }} />}
    </div>
    {calculatorText && <p dangerouslySetInnerHTML={{ __html: calculatorText }} />}
    <BaseForm formType="calculator" buttonText="Calculate the price" hasCarRegistrationInputImage />
  </div>
);

CalculatorForm.propTypes = {
  calculatorTitle: PropTypes.string,
  calculatorText: PropTypes.string,
};

CalculatorForm.defaultProps = {
  calculatorTitle: defaultCalculatorTitle,
  calculatorText: defaultCalculatorText,
};

export default CalculatorForm;
