import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Row, Col } from 'react-bootstrap';
import client from '@car-service/api-client';

import { initialValues, validationSchemaStep2 } from '@car-service/common/auctionCreation/step2';
import ControlButtons from 'modules/car-auctions/auction-your-car/components/ControlButtons';
import TitleForms from 'modules/car-auctions/auction-your-car/Step2/titleForms';
import ContactDetails from 'modules/car-auctions/auction-your-car/Step2/contactDetails';
import LocationForm from 'modules/car-auctions/auction-your-car/Step2/locationForm';
import StepHeader from 'components/PageHeader';
import DetailsInfoForm from 'modules/car-auctions/auction-your-car/Step2/detailsInfoForm';
import { SOME_ERROR_OCCURRED } from 'constants/messages';
import ErrorAlert from 'components/errorAlert';
import ConfirmationOfTerms from 'components/form/ConfirmationOfTerms';
import CarFeaturesForm from './carFeaturesForm';
import HistoryMaintenance from './historyMaintenance';
import { transferDataFromServe } from './helper';

const headerText =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euis mod tincidunt ut laoreet dolorea am erat volutpat. Ut wisi enim ad minim veniam,';
const headerTitle = 'Enter the basic details about <br /> the car you want to auction';

const Step2 = ({ next, nextButtonText, goBack, sharedValues, restart }) => {
  const [features, setFeatures] = useState([]);
  const [responseErrors, setResponseErrors] = useState([]);
  const [formikInitialValues, setFormikInitialValues] = useState(initialValues);

  const getFeatures = async () => {
    try {
      const data = await client.vehicles.getVehiclesFeatures(sharedValues.vehicleId);
      if (data && data.length) {
        setFeatures(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getSavedData = async () => {
    try {
      const dataFromStep = await client.longAuctions.getDraftedData(sharedValues.auctionId, {
        stepNumber: 2,
        temporaryToken: sharedValues.token,
      });

      if (dataFromStep) {
        const tranferedData = transferDataFromServe(dataFromStep);
        setFormikInitialValues({ ...formikInitialValues, ...tranferedData });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSavedData();
    getFeatures();
  }, []);

  /**
   * Sends data to the API and redirects to the next page
   *
   * @param {object} values - Yup field to compare to
   * @param {function} bag - Formik fields bag
   */
  const handleSubmitButton = async (values, bag) => {
    try {
      const { addressLine1, addressLine2, county, townCity, ...restValues } = values;
      await client.longAuctions.saveDataFromListingStep(sharedValues.auctionId, {
        ...restValues,
        ...(addressLine1 && { addressLine1 }),
        ...(addressLine2 && { addressLine2 }),
        ...(county && { county }),
        ...(townCity && { townCity }),
        temporaryToken: sharedValues.token,
        houseNameOrNumber: 'required field',
        serviceHistory: Number(values.serviceHistory.value),
        fullAddress: values.fullAddress.label,
      });
      next(values);
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
        validationSchema={validationSchemaStep2}
        onSubmit={handleSubmitButton}
        render={({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          setFieldError,
          setFieldTouched,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Row className="content-frame">
              <Col md="10" lg="9" xl="8">
                <TitleForms
                  values={values}
                  errors={errors}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  touched={touched}
                />
                <CarFeaturesForm
                  values={values}
                  errors={errors}
                  touched={touched}
                  features={features}
                  setFieldValue={setFieldValue}
                />
                <div className="form-box">
                  <HistoryMaintenance
                    values={values}
                    errors={errors}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                  />
                  <DetailsInfoForm
                    values={values}
                    errors={errors}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    touched={touched}
                    setFieldValue={setFieldValue}
                  />
                </div>
                <ContactDetails
                  values={values}
                  errors={errors}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  touched={touched}
                />
                <LocationForm
                  values={values}
                  errors={errors}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                  setFieldError={setFieldError}
                  setFieldTouched={setFieldTouched}
                  touched={touched}
                />
                <ConfirmationOfTerms
                  name="terms"
                  value={values.terms}
                  confirmationTitle="Confirmation"
                  labelText="Please tick to confirm that all information is accurate and that you agree to the "
                  labelLinkText="terms and conditions"
                  labelLink="/"
                  setFieldValue={setFieldValue}
                  error={touched.terms && errors.terms}
                />
                {responseErrors && responseErrors.map(error => <ErrorAlert message={error} />)}
                <ControlButtons
                  isNextButtonDisabled={!values.fullAddress || isSubmitting}
                  goBack={goBack}
                  nextButtonText={nextButtonText}
                  restart={restart}
                />
              </Col>
            </Row>
          </form>
        )}
      />
    </>
  );
};

Step2.propTypes = {
  nextButtonText: PropTypes.string,
  goBack: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired,
  sharedValues: PropTypes.object.isRequired,
};

Step2.defaultProps = {
  nextButtonText: '',
};

export default Step2;
