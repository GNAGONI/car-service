import React from 'react';
import FormGroupHead from 'components/form/FormGroupHead';
import PropTypes from 'prop-types';
import PreferredCollectionTimeItem from './PreferredCollectionTimeItem';

const PreferredCollectionTime = ({
  title,
  description,
  setFieldValue,
  setFieldTouched,
  values,
  errors,
  touched,
  minDate,
  isTimeDifferenceCalculated,
  maxValue,
  disabled,
}) => (
  <div className="form-box">
    <div className="form-block">
      <FormGroupHead title={title} description={description} />
      {values?.preferredCollectionDateTime?.map((i, index) => (
        <PreferredCollectionTimeItem
          index={index}
          totalCount={values.preferredCollectionDateTime.length}
          maxValue={maxValue}
          values={values}
          errors={errors}
          touched={touched}
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
          isTimeDifferenceCalculated={isTimeDifferenceCalculated}
          minDate={minDate}
          disabled={disabled}
        />
      ))}
    </div>
  </div>
);

PreferredCollectionTime.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  isTimeDifferenceCalculated: PropTypes.bool,
  minDate: PropTypes.instanceOf(Date),
  maxValue: PropTypes.number,
  disabled: PropTypes.bool,
};

PreferredCollectionTime.defaultProps = {
  title: '<strong>Preferred collection dates</strong>',
  description:
    'You can choose up to 3 collection time slots that suit your schedule here. Our collection\n' +
    'partner will be in touch directly to confirm your time.',
  isTimeDifferenceCalculated: false,
  maxValue: 3,
  disabled: false,
};

export default PreferredCollectionTime;
