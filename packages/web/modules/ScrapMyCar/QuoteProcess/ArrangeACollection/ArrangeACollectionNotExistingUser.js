import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import {
  arrangeACollectionValidationSchemaPassword,
  arrangeACollectionValidationSchema,
  arrangeACollectionValidationSchemaAddressByPostcode,
  arrangeACollectionValidationSchemaManualAddress,
} from '@car-service/common/formsData/scarMyCarQuoteProcess';
import {
  getPostcode,
  getUserPersonalDetails,
  getUserAddressDetails,
  getAddressesByPostcode,
  getQuoteStatus,
  getIsAddressManual,
} from '@car-service/redux/selectors/quote';
import { getUserFirstNameSelector, getUserLastNameSelector } from '@car-service/redux/selectors/user';
import { getAddressesByPostcodeRequest } from '@car-service/redux/actions/quote';

import { Router } from 'server/pages';
import { requestedStatusCheckForData } from 'webSpecificRedux/sagas/scrapMyCarRedirectSaga';
import { QUOTE_STATUS, QUOTE_ROUTES } from 'modules/ScrapMyCar/QuoteProcess/constants';
import StepHeader from 'components/PageHeader';
import NextButton from 'components/MultiStep/NextButton';
import ConfirmationOfTerms from 'components/form/ConfirmationOfTerms';
import PreferredCollectionTime from 'components/PreferredCollectionTimeForm';
import { increaseDateDays } from 'lib/dates';
import PersonalData from './PersonalData';
import Address from './Address';
import Password from './Password';

const headerText =
  '<p>We’ll need some details so we can organise your collection. Please enter your name – along with <strong>the address that the vehicle will be collected from</strong>. You will not be able to edit this address later; so it’s important to make sure it’s accurate.</p>';
const headerTitle = `Arrange a <strong>collection</strong>`;

const ArrangeACollectionNotExistingUser = ({ next, hasAccount, isAuthenticated, password }) => {
  const dispatch = useDispatch();
  const addressesByPostcode = useSelector(getAddressesByPostcode);
  const quoteStatus = useSelector(getQuoteStatus);
  const isAddressManual = useSelector(getIsAddressManual);
  const postcode = useSelector(getPostcode);
  const firstName = useSelector(getUserFirstNameSelector);
  const lastName = useSelector(getUserLastNameSelector);
  const [terms, preferredCollectionDateTime] = useSelector(getUserPersonalDetails);
  const [address, address1, address2, town, county] = useSelector(getUserAddressDetails);

  useEffect(() => {
    const isRequestedStatusValid = requestedStatusCheckForData(quoteStatus, QUOTE_STATUS.ARRANGE);
    if (!(firstName && lastName && postcode && preferredCollectionDateTime) && isRequestedStatusValid) {
      Router.pushRoute(QUOTE_ROUTES.HOMEPAGE);
    } else {
      dispatch(getAddressesByPostcodeRequest());
    }
  }, []);

  const isStepDisabled = quoteStatus !== QUOTE_STATUS.ARRANGE;
  const isValidationSchemeWithPassword = !hasAccount && !isAuthenticated;
  const isValidationSchemaWithManualAddress = isAddressManual;

  let validationSchema = arrangeACollectionValidationSchema;
  if (isValidationSchemeWithPassword) {
    validationSchema = validationSchema.concat(arrangeACollectionValidationSchemaPassword);
  }
  if (isValidationSchemaWithManualAddress) {
    validationSchema = validationSchema.concat(arrangeACollectionValidationSchemaManualAddress);
  } else {
    validationSchema = validationSchema.concat(arrangeACollectionValidationSchemaAddressByPostcode);
  }

  return (
    <>
      <StepHeader headerText={headerText} headerTitle={headerTitle} />
      <Formik
        enableReinitialize
        initialValues={{
          firstName,
          lastName,
          postcode,
          address,
          address1,
          address2,
          town,
          county,
          preferredCollectionDateTime,
          terms,
          password,
        }}
        validationSchema={validationSchema}
        isInitialValid={({ initialValues: values }) => validationSchema.isValidSync(values)}
        onSubmit={next}
        render={({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          setFieldTouched,
          isValid,
        }) => (
          <form onSubmit={handleSubmit}>
            <Row className="content-frame">
              <Col md="10" lg="9" xl="8">
                <PersonalData
                  values={values}
                  errors={errors}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  touched={touched}
                  disabled={isStepDisabled}
                />
                <Address
                  values={values}
                  errors={errors}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                  addressesByPostcode={addressesByPostcode}
                  disabled={isStepDisabled}
                />
                <PreferredCollectionTime
                  values={values}
                  errors={errors}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                  minDate={increaseDateDays(new Date(), 1)}
                  disabled={isStepDisabled}
                />
                {!hasAccount && !isAuthenticated && (
                  <>
                    <Password
                      values={values}
                      errors={errors}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      touched={touched}
                    />
                    <Col lg={10} className="form-group align-centered">
                      <ConfirmationOfTerms
                        name="terms"
                        value={values.terms}
                        labelText="Please tick this box to progress with your quote and confirm you have read and accepted the Car.service customer "
                        labelLinkText="terms &amp; conditions"
                        labelLink="/terms"
                        secondLabelLink="/privacy-policy"
                        secondLabelLinkText="privacy policy."
                        setFieldValue={setFieldValue}
                        error={touched.terms && errors.terms}
                        isSpaceNeeded={false}
                      />
                    </Col>
                  </>
                )}
                <NextButton nextButtonText="Book collection" isNextButtonDisabled={isSubmitting || !isValid} />
              </Col>
            </Row>
          </form>
        )}
      />
    </>
  );
};

ArrangeACollectionNotExistingUser.propTypes = {
  next: PropTypes.func.isRequired,
  hasAccount: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  password: PropTypes.string,
};

export default ArrangeACollectionNotExistingUser;
