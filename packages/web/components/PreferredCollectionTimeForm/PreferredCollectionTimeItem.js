import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SelectFormGroup from 'components/form/SelectFormGroup';
import DatePickerFormGroup from 'components/form/DatePickerFormGroup';
import { isWeekday } from 'lib/dates';
import { defaultTimeOptions, getPreferredTimeOptions } from 'modules/car-auctions/auction-your-car/Step4/helper';
import { preferredCollectionDateInitialValue } from '@car-service/common/auctionCreation/step4';

const PreferredCollectionTimeItem = ({
  index,
  totalCount,
  minDate,
  maxValue,
  setFieldValue,
  setFieldTouched,
  values,
  errors,
  touched,
  isTimeDifferenceCalculated,
  disabled,
}) => {
  const [timeOptions, changeTimeOptions] = useState(defaultTimeOptions);

  useEffect(() => {
    if (
      values?.listingStartDate &&
      values?.listingStartTime &&
      values?.preferredCollectionDateTime[index]?.preferredCollectionDate
    ) {
      const options = getPreferredTimeOptions(
        values?.preferredCollectionDateTime[index]?.preferredCollectionDate,
        values.listingStartDate,
        values.listingStartTime,
        7,
      );
      changeTimeOptions(options);
    }
  }, [
    values.listingStartDate,
    values.listingStartTime,
    values?.preferredCollectionDateTime[index]?.preferredCollectionDate,
  ]);

  /**
   * Add new preferred Collection Date in formik array
   */
  const addNewItem = () => {
    setFieldValue(
      'preferredCollectionDateTime',
      values.preferredCollectionDateTime.concat({ ...preferredCollectionDateInitialValue }),
    );
  };

  /**
   * Removes preferred Collection Date from formik array ans sets toched false
   */
  const removeItem = () => {
    const valuesArray = values?.preferredCollectionDateTime?.slice();
    const touchedArray = touched?.preferredCollectionDateTime?.slice();
    valuesArray?.splice(index, 1);
    touchedArray?.splice(index, 1);
    if (valuesArray) {
      setFieldValue('preferredCollectionDateTime', valuesArray);
    }
    if (touchedArray) {
      setFieldTouched('preferredCollectionDateTime', touchedArray);
    }
  };

  /**
   * Reset preferred Collection Time if already choosed value doesn't exist in new time options array
   *
   * @param {string|number} val - weekday
   */
  const handleChangeDate = val => {
    let options = [];
    if (isTimeDifferenceCalculated) {
      options = getPreferredTimeOptions(val, values.listingStartDate, values.listingStartTime, 7);
    } else {
      options = getPreferredTimeOptions(val);
    }
    changeTimeOptions(options);
    if (
      !options.find(option => option.value === values.preferredCollectionDateTime[index].preferredCollectionTime?.value)
    ) {
      setFieldValue(`preferredCollectionDateTime[${index}].preferredCollectionTime`, '');
    }
  };

  return (
    <div className="form-row double-input-row">
      {index < totalCount && totalCount < maxValue && !disabled && (
        <span role="button" tabIndex="-1" onKeyUp={() => {}} className="btn-add" onClick={addNewItem}>
          <span className="sr-only">Add new row </span>
        </span>
      )}
      {index > 0 && !disabled && (
        <span role="button" tabIndex="-1" onKeyUp={() => {}} className="btn-remove" onClick={removeItem}>
          <span className="sr-only">Add new row </span>
        </span>
      )}
      <DatePickerFormGroup
        classNames="col-12 col-xl-6 col-lg-6 col-md-6"
        placeholder="Select a date"
        name={`preferredCollectionDateTime[${index}].preferredCollectionDate`}
        value={values.preferredCollectionDateTime[index]?.preferredCollectionDate || ''}
        onChangeDate={handleChangeDate}
        setFieldValue={setFieldValue}
        setFieldTouched={setFieldTouched}
        minDate={minDate}
        filterDate={isWeekday}
        disabled={disabled}
        error={errors[`preferredCollectionDateTime[${index}].preferredCollectionDate`]}
      />
      <SelectFormGroup
        classNames="col-12 col-xl-6 col-lg-6 col-md-6"
        options={timeOptions}
        name={`preferredCollectionDateTime[${index}].preferredCollectionTime`}
        placeholder="Select time"
        setFieldValue={setFieldValue}
        setFieldTouched={setFieldTouched}
        stylesTheme="longAuction"
        currentOption={values.preferredCollectionDateTime[index]?.preferredCollectionTime}
        isDisabled={disabled}
        error={errors[`preferredCollectionDateTime[${index}].preferredCollectionTime`]}
      />
    </div>
  );
};

PreferredCollectionTimeItem.propTypes = {
  index: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  minDate: PropTypes.instanceOf(Date).isRequired,
  maxValue: PropTypes.number.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  isTimeDifferenceCalculated: PropTypes.bool,
  disabled: PropTypes.bool,
};

PreferredCollectionTimeItem.defaultProps = {
  isTimeDifferenceCalculated: false,
  disabled: false,
};

export default PreferredCollectionTimeItem;
