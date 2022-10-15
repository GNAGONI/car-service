import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import FormGroupHead from 'components/form/FormGroupHead';
import FormGroupWrapper from 'components/form/FormGroupWrapper';
import DatePickerFormGroup from 'components/form/DatePickerFormGroup';
import SelectFormGroup from 'components/form/SelectFormGroup';
import InputFormGroup from 'components/form/InputFormGroup';
import { isWeekday } from 'lib/dates';
import {
  defaultTimeOptions,
  durationOptions,
  getTimeOptionsByWeekDay,
} from 'modules/car-auctions/auction-your-car/Step4/helper';

const TimeForms = ({ setFieldValue, setFieldTouched, values, errors, touched }) => {
  const [timeOptions, changeTimeOptions] = useState(defaultTimeOptions);

  useEffect(() => {
    if (values?.listingStartDate) {
      const options = getTimeOptionsByWeekDay(values.listingStartDate);
      changeTimeOptions(options);
    }
  }, [values.listingStartDate]);

  /**
   * Reset listingStartTime Time if already choosed value doesn't exist in new time options array
   *
   * @param {string|number} val - weekday
   */
  const handleChangeDate = val => {
    const options = getTimeOptionsByWeekDay(val);
    changeTimeOptions(options);
    if (!options.find(option => option.value === values.listingStartTime.value)) {
      setFieldValue('listingStartTime', '');
    }
  };

  const durationLabelValue =
    Array.isArray(durationOptions) && durationOptions[0] && durationOptions[0].label ? durationOptions[0].label : '';

  return (
    <div className="form-box">
      <div className="form-block">
        <FormGroupHead
          title="Listing duration and start time"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet dolorea am erat ipsum dolor sit amet, consectetuer adipiscing elitd iam."
        />
        <FormGroupWrapper
          label="Duration"
          toolTipTitle="Total annual running cost"
          toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        >
          <InputFormGroup
            value={durationLabelValue}
            name="durationDays"
            disabled
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            stylesTheme="longAuction"
            currentOption={values.durationDays}
            error={touched.durationDays && errors.durationDays}
          />
        </FormGroupWrapper>
      </div>
      <div className="form-block">
        <FormGroupHead title="Start Time" />
        <FormGroupWrapper
          toolTipTitle="Total annual running cost"
          toolTipDescription=" Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet
                dolorea am erat ipsum dolor sit amet, consectetuer adipiscing ."
        >
          <div className="form-row">
            <DatePickerFormGroup
              classNames="col-12 col-sm-6"
              placeholder="Select a Date"
              name="listingStartDate"
              value={values.listingStartDate || ''}
              setFieldValue={setFieldValue}
              setFieldTouched={setFieldTouched}
              onChangeDate={handleChangeDate}
              error={touched.listingStartDate && errors.listingStartDate}
              minDate={new Date()}
              filterDate={isWeekday}
            />
            <SelectFormGroup
              classNames="col-12 col-sm-6"
              options={timeOptions}
              name="listingStartTime"
              placeholder="Select Time"
              setFieldValue={setFieldValue}
              setFieldTouched={setFieldTouched}
              stylesTheme="longAuction"
              currentOption={values.listingStartTime}
              error={touched.listingStartTime && errors.listingStartTime}
            />
          </div>
        </FormGroupWrapper>
      </div>
    </div>
  );
};

TimeForms.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default TimeForms;
