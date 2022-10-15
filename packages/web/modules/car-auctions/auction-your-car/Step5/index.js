import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { Row, Col } from 'react-bootstrap';

import { validationSchemaStep5, initialValues } from '@car-service/common/auctionCreation/step5';
import { SOME_ERROR_OCCURRED } from 'constants/messages';
import client from '@car-service/api-client';
import ConfirmationOfTerms from 'components/form/ConfirmationOfTerms';
import ErrorAlert from 'components/errorAlert';
import StepHeader from 'components/PageHeader';
import ControlButtons from '../components/ControlButtons';
import TableQuote from './tableQuote';

import FeaturedPopup from './featuredPopup';
import { transferDataFromServer } from './helpers';

const confirmationLabelText =
  'I accept Car.service terms & conditions and advertising guidelines. I also acknowledge that my advert will be processed immediately and I consent for the service to start within the cancellation period.';

const headerText =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euis mod tincidunt ut laoreet dolorea am erat volutpat. Ut wisi enim ad minim veniam,';
const headerTitle = 'Enter the basic details about <br /> the car you want to auction';
const featurePrice = 3.99;

const Step5 = ({ nextButtonText, goBack, sharedValues, next, restart }) => {
  const [packages, changePackages] = useState([]);
  const [responseErrors, setResponseErrors] = useState([]);
  const [isFeaturedPopupOpened, changeIsFeaturedPopupOpened] = useState(false);
  const [formikInitialValues, setFormikInitialValues] = useState(initialValues);

  const getSavedData = async () => {
    try {
      const dataFromStep = await client.longAuctions.getDraftedData(sharedValues.auctionId, {
        stepNumber: 5,
        temporaryToken: sharedValues.token,
      });

      if (dataFromStep) {
        const transferredData = transferDataFromServer(dataFromStep);

        setFormikInitialValues({ ...formikInitialValues, ...transferredData });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPackages();
    getSavedData();
  }, []);

  const getPackages = async () => {
    try {
      const response = await client.payments.getPackages();
      changePackages(response);
    } catch (e) {
      setResponseErrors((e?.error?.messages && Object.values(e.error.messages)) || [SOME_ERROR_OCCURRED]);
    }
  };

  const handleFeaturedPopupClose = () => {
    changeIsFeaturedPopupOpened(false);
  };

  const handleFeaturedPopupOpen = () => {
    changeIsFeaturedPopupOpened(true);
  };

  return (
    <>
      <StepHeader headerText={headerText} headerTitle={headerTitle} />
      <Formik
        enableReinitialize
        validationSchema={validationSchemaStep5}
        initialValues={formikInitialValues}
        render={({ values, errors, touched, setFieldValue }) => (
          <Form>
            <Row className="content-frame">
              <Col md="10" lg="9" xl="8">
                <div className="form-box">
                  <div className="form-block">
                    <TableQuote
                      packages={packages}
                      setFieldValue={setFieldValue}
                      values={values}
                      errors={errors}
                      touched={touched}
                      handleFeaturedPopupOpen={handleFeaturedPopupOpen}
                    />
                    <ConfirmationOfTerms
                      name="confirmationOfTermsAndConditions"
                      value={values.confirmationOfTermsAndConditions}
                      labelText={confirmationLabelText}
                      setFieldValue={setFieldValue}
                      error={touched.confirmationOfTermsAndConditions && errors.confirmationOfTermsAndConditions}
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <FeaturedPopup
              isFeaturedPopupOpened={isFeaturedPopupOpened}
              handleFeaturedPopupOpen={handleFeaturedPopupOpen}
              handleFeaturedPopupClose={handleFeaturedPopupClose}
              setFieldValue={setFieldValue}
              sharedValues={sharedValues}
              values={values}
              featurePrice={featurePrice}
              next={next}
            />
            {responseErrors && responseErrors.map(error => <ErrorAlert message={error} />)}
            <ControlButtons goBack={goBack} nextButtonText={nextButtonText} showNextButton={false} restart={restart} />
          </Form>
        )}
      />
    </>
  );
};

Step5.propTypes = {
  nextButtonText: PropTypes.string,
  goBack: PropTypes.func,
  next: PropTypes.func,
  sharedValues: PropTypes.object,
  restart: PropTypes.func.isRequired,
};

Step5.defaultProps = {
  nextButtonText: '',
  goBack: () => {},
  next: () => {},
  sharedValues: {},
};

export default Step5;
