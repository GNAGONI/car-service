import React from 'react';
import { Row, Col } from 'react-bootstrap';

import SignInHeader from 'modules/User/SignIn/SignInHeader';
import SignInForm from 'modules/User/SignIn/SignInForm';
import { QUOTE_ROUTES } from 'modules/ScrapMyCar/QuoteProcess/constants';

const headerTitle = '<strong>Log into your existing account to arrange a collection</strong>';
const headerDescription =
  'It looks like you already have a Car.service account linked to this email address.\n' +
  'Please log-in using one of the options below so we can save your quote to your account.';

const ArrangeACollectionExistingUser = () => (
  <section className="content section-signup signin extend form-large form-bordered bg-before-default text-center b-validation">
    <SignInHeader title={headerTitle} description={headerDescription} withCreateAccount={false} />
    <div className="content-holder bg-before-lightest pt-4">
      <h2 className="text-small text-center">Login with your email</h2>
      <Row className="mt-3 pb-4">
        <Col md={10} lg={9} xl={7}>
          <SignInForm redirect={QUOTE_ROUTES.ARRANGE_COLLECTION} />
        </Col>
      </Row>
    </div>
  </section>
);

export default ArrangeACollectionExistingUser;
