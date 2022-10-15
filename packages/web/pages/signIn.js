import React from 'react';
import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import { Container, Row, Col } from 'react-bootstrap';

import { unauthentificatedRoute } from 'lib/routes';
import SignInHeader from 'modules/User/SignIn/SignInHeader';
import SignInForm from 'modules/User/SignIn/SignInForm';

const headerTitle = 'Login to <strong>your account</strong>';
const headerDescription = '';

const SignIn = () => (
  <Page title="Sign in">
    <DefaultHeader />
    <main id="main" className="bg-before-white">
      <Container>
        <section className="content section-signup signin extend form-large form-bordered bg-before-default text-center b-validation">
          <SignInHeader title={headerTitle} description={headerDescription} />
          <div className="content-holder bg-before-lightest pt-4">
            <h2 className="text-small text-center">Login with your email</h2>
            <Row className="mt-3">
              <Col md={10} lg={9} xl={7}>
                <SignInForm redirect="/my-account" />
              </Col>
            </Row>
          </div>
        </section>
      </Container>
    </main>
    <Footer />
  </Page>
);

SignIn.getInitialProps = ctx => {
  unauthentificatedRoute(ctx, '/my-account');
};

export default SignIn;
