import React from 'react';
import PropTypes from 'prop-types';
import InputFormGroup from 'components/form/InputFormGroup';
import FormGroupHead from 'components/form/FormGroupHead';
import FormGroupWrapper from 'components/form/FormGroupWrapper';

const PriceForms = ({ handleChange, handleBlur, values, errors, touched }) => (
  <div className="form-box bg-before-lightest has-arrow">
    <div className="form-block">
      <FormGroupHead
        title="What’s your start price for the car"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euis"
      />
      <FormGroupWrapper
        classNames="has-pound"
        label="Starting price"
        toolTipTitle="Total annual running cost"
        toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        id="start-price"
        isLarge
        hasIcon
      >
        <InputFormGroup
          id="start-price"
          value={values.startingPrice}
          name="startingPrice"
          placeholder="0"
          iconText="£"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={touched.startingPrice && errors.startingPrice}
        />
      </FormGroupWrapper>
    </div>
    <div className="form-block">
      <FormGroupHead
        title="Do you want to add or reserve a price?"
        description="A reserve price can discourage bidding, so enter an amount that's the least you'll accept"
      />
      <FormGroupWrapper
        classNames="has-pound"
        label="Reserve price"
        toolTipTitle="Total annual running cost"
        toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        id="reserve-price"
        isLarge
        hasIcon
      >
        <InputFormGroup
          id="reserve-price"
          value={values.reservePrice}
          name="reservePrice"
          placeholder="0"
          iconText="£"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={touched.reservePrice && errors.reservePrice}
        />
      </FormGroupWrapper>
    </div>
  </div>
);

PriceForms.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default PriceForms;
