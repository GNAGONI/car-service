import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import client from '@car-service/api-client';
import InputFormGroup from 'components/form/InputFormGroup';
import FormGroupWrapper from 'components/form/FormGroupWrapper';
import FormGroupHead from 'components/form/FormGroupHead';
import AddressForm from 'modules/car-auctions/auction-your-car/Step2/addressForm';

const LocationForm = ({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  setFieldValue,
  setFieldError,
  setFieldTouched,
}) => {
  const [addressOptions, setAddressOptions] = useState([]);
  /**
   * Get address by postcode
   */
  const getAddressByPostcode = async () => {
    try {
      const data = await client.locations.getLocationByPostcode(values.postcode);
      if (data && data.length) {
        setAddressOptions(data.map((address, index) => ({ value: index, label: address })));
      } else {
        setFieldError('postcode', 'Invalid postcode');
      }
    } catch (e) {
      setFieldError('postcode', 'Invalid postcode');
    }
  };

  return (
    <div className="form-box">
      <FormGroupHead title="Location of car" />
      <div className="form-block">
        <FormGroupWrapper
          label="Postcode"
          toolTipTitle="Total annual running cost"
          toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
          id="telephoneOrMobileNumber"
        >
          <InputFormGroup
            id="postcode"
            value={values.postcode}
            name="postcode"
            placeholder="PR26 7SY"
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={touched.postcode && errors.postcode}
          />
        </FormGroupWrapper>
      </div>
      <div className="btn-block not-extend text-center">
        <Button
          type="button"
          size="md"
          btn-md
          variant="dark"
          onClick={getAddressByPostcode}
          disabled={!values.postcode}
        >
          Lookup postcode
        </Button>
      </div>
      {!!addressOptions.length && (
        <AddressForm
          values={values}
          errors={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
          touched={touched}
          addressOptions={addressOptions}
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
        />
      )}
    </div>
  );
};

LocationForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldError: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
};

export default LocationForm;
