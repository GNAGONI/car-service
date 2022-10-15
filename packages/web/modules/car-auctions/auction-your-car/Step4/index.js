import React, { useEffect, useState } from 'react';
import PriceForms from 'modules/car-auctions/auction-your-car/Step4/priceForms';
import TimeForms from 'modules/car-auctions/auction-your-car/Step4/timeForms';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Row, Col } from 'react-bootstrap';
import { initialValues, validationSchemaStep4 } from '@car-service/common/auctionCreation/step4';
import client from '@car-service/api-client';

import ErrorAlert from 'components/errorAlert';
import { SOME_ERROR_OCCURRED } from 'constants/messages';
import { increaseDateDays, increaseDateHours } from 'lib/dates';
import StepHeader from 'components/PageHeader';
import PreferredCollectionTime from 'components/PreferredCollectionTimeForm';
import ControlButtons from '../components/ControlButtons';
import { transferDataFromServer } from './helper';

const headerText =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euis mod tincidunt ut laoreet dolorea am erat volutpat. Ut wisi enim ad minim veniam,';
const headerTitle = 'What’s your start price for the car?';

const Step4 = ({ next, nextButtonText, goBack, sharedValues, restart }) => {
  const [responseErrors, setResponseErrors] = useState([]);
  const [formikInitialValues, setFormikInitialValues] = useState(initialValues);

  const getSavedData = async () => {
    try {
      const dataFromStep = await client.longAuctions.getDraftedData(sharedValues.auctionId, {
        stepNumber: 4,
        temporaryToken: sharedValues.token,
      });

      if (dataFromStep) {
        const tranferedData = transferDataFromServer(dataFromStep);
        setFormikInitialValues({ ...formikInitialValues, ...tranferedData });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSavedData();
  }, []);

  /**
   * Sends data to the API and redirects to the next page
   *
   * @param {object} values - Yup field to compare to
   * @param {function} bag - Formik fields bag
   */
  const handleSubmitButton = async (values, bag) => {
    try {
      await client.longAuctions.saveDataFromPriceAndTimeStep(sharedValues.auctionId, {
        temporaryToken: sharedValues.token,
        startingPrice: +values.startingPrice,
        reservePrice: +values.reservePrice,
        startDateTime: increaseDateHours(values.listingStartDate, values.listingStartTime.value),
        collectionTimes: values?.preferredCollectionDateTime?.map(time =>
          increaseDateHours(time.preferredCollectionDate, time.preferredCollectionTime.value),
        ),
      });
      next();
    } catch (e) {
      setResponseErrors((e?.error?.messages && Object.values(e.error.messages)) || [SOME_ERROR_OCCURRED]);
      bag.setSubmitting(false);
    }
  };

  return (
    <>
      <StepHeader headerText={headerText} headerTitle={headerTitle} />
      <Formik
        enableReinitialize
        initialValues={formikInitialValues}
        validationSchema={validationSchemaStep4}
        onSubmit={handleSubmitButton}
        render={({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          setFieldTouched,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Row className="content-frame">
              <Col md="10" lg="9" xl="8">
                <PriceForms
                  values={values}
                  errors={errors}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  touched={touched}
                />
                <TimeForms
                  values={values}
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                />
                <PreferredCollectionTime
                  values={values}
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                  isTimeDifferenceCalculated
                  minDate={increaseDateDays(values.listingStartDate, +values.durationDays.value.slice(0, -1))}
                />
                {responseErrors && responseErrors.map(error => <ErrorAlert message={error} />)}
                <ControlButtons
                  goBack={goBack}
                  nextButtonText={nextButtonText}
                  restart={restart}
                  isNextButtonDisabled={isSubmitting}
                />
              </Col>
            </Row>
          </form>
        )}
      />
    </>
  );
};

Step4.propTypes = {
  nextButtonText: PropTypes.string,
  goBack: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired,
  sharedValues: PropTypes.object.isRequired,
};

Step4.defaultProps = {
  nextButtonText: '',
};

export default Step4;
