import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import { unauthentificatedRoute } from 'lib/routes';
import { ForgotPasswordForm } from 'modules/ForgotPassword';
import { FormHeader } from '../components/FormHeader';

const ForgotPassword = ({ title, description, linkText, formTitle }) => (
  <Page title="Forgot your password">
    <DefaultHeader />
    <main id="main">
      <Container>
        <section className="change-password-form content extend form-large form-bordered b-validation">
          <FormHeader title={title} description={description} linkText={linkText} />
          <div className="content-holder bg-before-lightest pt-4">
            {formTitle ? <h3 className="text-center form-header-section__title pt-3 pb-4">{formTitle}</h3> : null}
            <Row className="mt-3">
              <Col md={9} lg={8} xl={6}>
                <ForgotPasswordForm />
              </Col>
            </Row>
          </div>
        </section>
      </Container>
    </main>
    <Footer />
  </Page>
);

ForgotPassword.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  linkText: PropTypes.string,
  formTitle: PropTypes.string,
};

ForgotPassword.defaultProps = {
  title: '',
  description: '',
  linkText: '',
  formTitle: '',
};

ForgotPassword.getInitialProps = async ctx => {
  unauthentificatedRoute(ctx, '/my-account/settings/change-password');

  return {
    title: `Forgot your <strong>password</strong>`,
    description: `If you've forgot your password, please use the form below to reset it via your email or go back to `,
    linkText: 'login here',
    formTitle: 'Enter your email to reset your password',
  };
};

export default ForgotPassword;
