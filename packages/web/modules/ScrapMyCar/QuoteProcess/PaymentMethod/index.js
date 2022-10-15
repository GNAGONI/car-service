import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { getPaymentDetails, getQuoteStatus } from '@car-service/redux/selectors/quote';
import { paymentMethodValidationSchema } from '@car-service/common/formsData/scarMyCarQuoteProcess';
import { setPaymentMethodRequest } from '@car-service/redux/actions/quote';

import { QUOTE_STATUS, QUOTE_ROUTES } from 'modules/ScrapMyCar/QuoteProcess/constants';
import { Router } from 'server/pages';
import { requestedStatusCheckForData } from 'webSpecificRedux/sagas/scrapMyCarRedirectSaga';
import StepHeader from 'components/PageHeader';
import NextButton from 'components/MultiStep/NextButton';
import FormSection from './FormSection';
import LogosSection from './LogosSection';

const headerText =
  'Please choose your preferred payment method and confirm your account details. It’s\n' +
  'important to ensure these are correct to avoid any delayed payments or problems issuing\n' +
  'your funds.';
const headerTitle = `<strong>Please choose your payment method</strong>`;

const PaymentMethod = () => {
  const dispatch = useDispatch();
  const quoteStatus = useSelector(getQuoteStatus);
  const isStepDisabled = quoteStatus !== QUOTE_STATUS.PENDING_PAYMENT;
  const [defaultPaymentType, defaultBankFullName, defaultBankSortCode, defaultBankAccountNumber] = useSelector(
    getPaymentDetails,
  );

  const handleSubmitButton = async (values, { setErrors, setSubmitting, setFieldTouched }) => {
    const { payment: paymentType, fullName: bankFullName, bankSortCode, bankAccountNumber } = values;
    dispatch(
      setPaymentMethodRequest({
        paymentType,
        bankFullName,
        bankSortCode,
        bankAccountNumber,
        actions: { setErrors, setSubmitting, setFieldTouched },
      }),
    );
  };

  useEffect(() => {
    const isRequestedStatusValid = requestedStatusCheckForData(quoteStatus, QUOTE_STATUS.PENDING_PAYMENT);
    if (
      !(defaultPaymentType && defaultBankFullName && defaultBankSortCode && defaultBankAccountNumber) &&
      isRequestedStatusValid
    ) {
      Router.pushRoute(QUOTE_ROUTES.HOMEPAGE);
    }
  }, []);

  return (
    <>
      <StepHeader headerText={headerText} headerTitle={headerTitle} />
      <Formik
        enableReinitialize
        initialValues={{
          payment: defaultPaymentType,
          fullName: defaultBankFullName,
          bankSortCode: defaultBankSortCode,
          bankAccountNumber: defaultBankAccountNumber,
        }}
        validationSchema={paymentMethodValidationSchema}
        isInitialValid={({ initialValues: values }) => paymentMethodValidationSchema.isValidSync(values)}
        onSubmit={handleSubmitButton}
        render={({
          handleSubmit,
          isSubmitting,
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          setFieldValue,
          setFieldTouched,
          isValid,
        }) => (
          <form onSubmit={handleSubmit}>
            <Row className="content-frame">
              <Col md="10" lg="9" xl="8">
                <div className="form-box payment-form">
                  <LogosSection />
                  <FormSection
                    values={values}
                    errors={errors}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                    disabled={isStepDisabled}
                  />
                </div>
                <NextButton nextButtonText="Complete booking" isNextButtonDisabled={isSubmitting || !isValid} />
              </Col>
            </Row>
          </form>
        )}
      />
    </>
  );
};

export default PaymentMethod;
