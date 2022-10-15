import React from 'react';
import PropTypes from 'prop-types';
import FormGroupWrapper from 'components/form/FormGroupWrapper';
import InputFormGroup from 'components/form/InputFormGroup';
import FormGroupHead from 'components/form/FormGroupHead';

const TotalCost = ({ totalCost }) => (
  <>
    <FormGroupHead title="Total cost of advert listings:" />
    <FormGroupWrapper
      classNames="has-pound"
      toolTipTitle="Total cost of advert listings"
      toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
      id="start-price"
      isLarge
      hasIcon
    >
      <InputFormGroup value={totalCost} placeholder="0.00" disabled iconText="£" />
    </FormGroupWrapper>
  </>
);

TotalCost.propTypes = {
  totalCost: PropTypes.string.isRequired,
};

export default TotalCost;
