import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import InputFormGroup from 'components/form/InputFormGroup';
import FormGroupHead from 'components/form/FormGroupHead';
import SelectFormGroup from 'components/form/SelectFormGroup';
import { setManualAddress } from '@car-service/redux/actions/quote';
import { getIsAddressManual } from '@car-service/redux/selectors/quote';
import ManuallyEnteredAddress from './ManuallyEnteredAddress';

const Address = ({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  setFieldValue,
  setFieldTouched,
  addressesByPostcode,
  disabled,
}) => {
  const isAddressManual = useSelector(getIsAddressManual);
  const [isEnterAddressManuallySelected, toogleEnterAddressManually] = useState(isAddressManual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setManualAddress({ isAddressManual: isEnterAddressManuallySelected }));
  }, [isEnterAddressManuallySelected]);

  const handleChangeAddressClick = () => {
    toogleEnterAddressManually(!isEnterAddressManuallySelected);
  };

  return (
    <div className="form-box address-block">
      <FormGroupHead title="Your Address" />
      <div className="form-block">
        <InputFormGroup
          id="postcode"
          value={values.postcode}
          name="postcode"
          placeholder="Postcode name"
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={touched.postcode && errors.postcode}
          disabled
          textDisable="This cannot be changed"
        />
      </div>
      {isAddressManual ? (
        <ManuallyEnteredAddress
          values={values}
          errors={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
          touched={touched}
          disabled={disabled}
        />
      ) : (
        <div className="form-block">
          <SelectFormGroup
            id=""
            options={addressesByPostcode}
            name="address"
            placeholder="Select your address"
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            stylesTheme="longAuction"
            currentOption={values.address}
            error={touched.address && errors.address}
            isDisabled={disabled}
          />
        </div>
      )}
      {!disabled && (
        <span role="button" tabIndex="-1" className="link" onClick={handleChangeAddressClick} onKeyUp={() => {}}>
          {isEnterAddressManuallySelected ? 'Choose a pre-selected address' : 'Enter address manually'}
        </span>
      )}
    </div>
  );
};

Address.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  addressesByPostcode: PropTypes.array,
  disabled: PropTypes.bool,
};

Address.defaultProps = {
  addressesByPostcode: [],
  disabled: false,
};

export default Address;
