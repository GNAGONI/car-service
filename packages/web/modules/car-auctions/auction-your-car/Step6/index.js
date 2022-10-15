import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { Row, Col } from 'react-bootstrap';
import { setCookie } from 'lib/cookie';
import { Router } from 'server/pages';

import { validationSchemaStep6, initialValues } from '@car-service/common/auctionCreation/step6';
import client from '@car-service/api-client';
import { SOME_ERROR_OCCURRED } from 'constants/messages';
import ErrorAlert from 'components/errorAlert';
import StepHeader from 'components/PageHeader';
import ControlButtons from '../components/ControlButtons';
import SummarySection from './summarySection';
import AccountSection from './accountSection';

const headerText =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euis mod tincidunt ut laoreet dolorea am erat volutpat. Ut wisi enim ad minim veniam,';
const headerTitle = 'Enter the basic details about <br /> the car you want to auction';

/**
 * Function redirects user to car-auction page
 *
 */
const goToCarAuctionsPage = () => {
  Router.pushRoute('/car-auctions');
};

/**
 * Login user
 *
 * @param {string} email - User email
 * @param {string} password - User password
 */
const login = async (email, password) => {
  const loginData = {
    email,
    password,
  };
  const { userJWT } = await client.auth.login(loginData);

  return userJWT;
};

/**
 * Create user's account
 *
 * @param {string} token - User temporary token
 * @param {string} password - User password
 * @param {string} auctionId - Auction's id
 */
const createAccount = async (token, password, auctionId) => {
  const createAccountData = {
    temporaryToken: token,
    password,
  };

  await client.longAuctions.createAccount(auctionId, createAccountData);
};

/**
 * Activation of auction
 *
 * @param {string} auctionId - Auction's id
 */
const activateAuction = async auctionId => {
  await client.longAuctions.activate(auctionId);
};

const Step6 = ({ next, nextButtonText, goBack, restart, sharedValues: { auctionId, token, contactEmail } }) => {
  const [advertDetails, setAdvertDetails] = useState({});
  const [vehicleDetails, setVehicleDetails] = useState({});
  const [hasAccount, setHasAccount] = useState(false);
  const [responseErrors, setResponseErrors] = useState([]);

  useEffect(() => {
    getAuctionData();
  }, []);

  /**
   * Function gets auction overview
   */
  const getAuctionData = async () => {
    try {
      const data = { temporaryToken: token };
      const response = await client.longAuctions.getAuctionOverview(auctionId, data);

      if (response) {
        setAdvertDetails(response.advertDetails);
        setVehicleDetails(response.vehicleDetails);
        setHasAccount(response.hasAccount);
      }
    } catch (e) {
      setResponseErrors((e?.error?.messages && Object.values(e.error.messages)) || [SOME_ERROR_OCCURRED]);
    }
  };

  /**
   * Function creates account if it doesn't exist, authorize current user,
   * activate auction and redirects user to car auction page
   *
   * @param {object} obj
   * @param {string} obj.password - User's password
   */
  const handleSubmit = async ({ password }) => {
    try {
      if (!hasAccount) {
        await createAccount(token, password, auctionId);
      }
      // TODO: move to saga
      const userJWT = await login(contactEmail, password);
      setCookie('token', userJWT);
      if (!hasAccount) {
        client.setToken(userJWT);
      }
      await activateAuction(auctionId); // TODO: Activate token after payment procedure
      goToCarAuctionsPage();
      next();
    } catch (e) {
      setResponseErrors((e?.error?.messages && Object.values(e.error.messages)) || [SOME_ERROR_OCCURRED]);
    }
  };

  return (
    <>
      <StepHeader headerText={headerText} headerTitle={headerTitle} />
      <Formik
        enableReinitialize={false}
        initialValues={initialValues}
        validationSchema={validationSchemaStep6}
        onSubmit={handleSubmit}
        render={({ values, errors, touched, handleBlur, handleChange, setFieldValue, setFieldTouched }) => (
          <Form>
            <div className="form-box">
              <Row className="content-frame">
                <Col md="10" lg="9" xl="9">
                  <SummarySection advertDetails={advertDetails} vehicleDetails={vehicleDetails} />
                </Col>
              </Row>
            </div>
            <div className="form-box">
              <Row className="content-frame">
                <Col md="10" lg="9" xl="9">
                  <AccountSection
                    values={values}
                    errors={errors}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                    hasAccount={hasAccount}
                  />
                </Col>
              </Row>
            </div>
            {responseErrors && responseErrors.map(error => <ErrorAlert message={error} />)}
            <ControlButtons goBack={goBack} nextButtonText={nextButtonText} restart={restart} />
          </Form>
        )}
      />
    </>
  );
};

Step6.propTypes = {
  nextButtonText: PropTypes.string,
  goBack: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired,
  sharedValues: PropTypes.object.isRequired,
};

Step6.defaultProps = {
  nextButtonText: '',
};

export default Step6;
