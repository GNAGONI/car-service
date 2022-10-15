import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { getUserEmailSelector, getUserPhoneNumberSelector } from '@car-service/redux/selectors/user';
import { isUserAuthenticatedSelector } from '@car-service/redux/selectors/userAuth';
import { getPhoneNumber, getQuoteStatus } from '@car-service/redux/selectors/quote';
import { enterDetailsValidationSchema } from '@car-service/common/formsData/scarMyCarQuoteProcess';
import { enterDetailsRequest } from '@car-service/redux/actions/quote';
import { setEmail, getUserDataRequest } from '@car-service/redux/actions/user';
import { Router } from 'server/pages';
import { requestedStatusCheckForData } from 'webSpecificRedux/sagas/scrapMyCarRedirectSaga';
import { QUOTE_STATUS, QUOTE_ROUTES } from 'modules/ScrapMyCar/QuoteProcess/constants';
import StepHeader from 'components/PageHeader';
import NextButton from 'components/MultiStep/NextButton';
import DetailsForm from './DetailsForm';

const headerText = 'Please fill in your details below and we will send you a copy of your quote for future reference';
const headerTitle = `Where should we send a copy of your <strong>quote</strong>?`;

const EnterDetails = () => {
  const dispatch = useDispatch();

  const defaultEmail = useSelector(getUserEmailSelector);
  const quotePhoneNumber = useSelector(getPhoneNumber);
  const isAuthenticated = useSelector(isUserAuthenticatedSelector);
  const quoteStatus = useSelector(getQuoteStatus);
  const userPhoneNumber = useSelector(getUserPhoneNumberSelector);

  const handleSubmitButton = async (values, { setErrors, setSubmitting, setFieldTouched }) => {
    const { email, phoneNumber } = values;
    dispatch(setEmail(email));
    dispatch(enterDetailsRequest({ phoneNumber, actions: { setErrors, setSubmitting, setFieldTouched } }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUserDataRequest());
    }
    const isRequestedStatusValid = requestedStatusCheckForData(quoteStatus, QUOTE_STATUS.DRAFT);
    if (!(defaultEmail && defaultPhoneNumber) && isRequestedStatusValid) {
      Router.pushRoute(QUOTE_ROUTES.HOMEPAGE);
    }
  }, []);

  const defaultPhoneNumber = quotePhoneNumber || userPhoneNumber || '';

  return (
    <>
      <StepHeader headerText={headerText} headerTitle={headerTitle} />
      <Formik
        enableReinitialize
        initialValues={{
          email: defaultEmail,
          phoneNumber: defaultPhoneNumber,
        }}
        validationSchema={enterDetailsValidationSchema}
        isInitialValid={({ initialValues: values }) => enterDetailsValidationSchema.isValidSync(values)}
        onSubmit={handleSubmitButton}
        render={({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting, isValid }) => (
          <form onSubmit={handleSubmit}>
            <Row className="content-frame">
              <Col md="10" lg="9" xl="8">
                <DetailsForm
                  values={values}
                  errors={errors}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  touched={touched}
                  emailDisabled={quoteStatus !== QUOTE_STATUS.DRAFT || isAuthenticated}
                  phoneNumberDisabled={quoteStatus !== QUOTE_STATUS.DRAFT}
                />
                <NextButton nextButtonText="Get price now" isNextButtonDisabled={isSubmitting || !isValid} />
              </Col>
            </Row>
          </form>
        )}
      />
    </>
  );
};

export default EnterDetails;
