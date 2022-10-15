import React from 'react';
import { Link } from 'server/pages';
import { Container, Row, Col } from 'react-bootstrap';
import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';

import { unauthentificatedRoute } from 'lib/routes';
import SignUpHeader from 'modules/User/Register/Customer/SignUpHeader';
import SignUpForm from 'modules/User/Register/Customer/SignUpForm';

const CustomerRegister = () => (
  <Page title="Register">
    <DefaultHeader />
    <main id="main">
      <Container>
        <Row>
          <Col>
            <section className="section-signup signin b-validation extend content form-large form-bordered bg-before-default text-center">
              <SignUpHeader />
              <div className="content-holder bg-before-lightest">
                <div className="form-block">
                  <div className="section-head bordered mb-3">
                    <ul className="tick-list">
                      <li>Scrap you car</li>
                      <li>Auction your car</li>
                      <li>Car finance</li>
                      <li>Car insurance</li>
                      <li>Car warranties</li>
                    </ul>
                    <span className="text">
                      Already have an account?{' '}
                      <Link route="/sign-in">
                        <a className="register__link">Log in</a>
                      </Link>
                    </span>
                  </div>
                  <Row>
                    <Col md={10} lg={9} xl={7}>
                      <h2 className="text-small text-center">Sign up with your email</h2>
                      <SignUpForm />
                    </Col>
                  </Row>
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </main>
    <Footer />
  </Page>
);

CustomerRegister.getInitialProps = ctx => {
  unauthentificatedRoute(ctx);
};

export default CustomerRegister;
