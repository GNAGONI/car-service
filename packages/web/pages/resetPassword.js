import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';

import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import { ResetPasswordForm } from 'modules/ResetPassword';
import { FormHeader } from '../components/FormHeader';

const ResetPassword = ({ title, description, formTitle }) => {
  const router = useRouter();
  const {
    query: { resetToken },
  } = router;

  return (
    <Page title="Reset password">
      <DefaultHeader />
      <main id="main">
        <Container>
          <section className="content extend form-large form-bordered b-validation">
            <FormHeader title={title} description={description} />
            <div className="content-holder bg-before-lightest pt-4">
              {title && <h3 className="text-center form-header-section__title pt-3 pb-2">{formTitle}</h3>}
              <Row className="mt-3">
                <Col md={9} lg={8} xl={6}>
                  <ResetPasswordForm resetToken={resetToken} />
                </Col>
              </Row>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </Page>
  );
};

ResetPassword.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  formTitle: PropTypes.string,
};

ResetPassword.defaultProps = {
  title: '',
  description: '',
  formTitle: '',
};

ResetPassword.getInitialProps = () => ({
  title: `Reset your <strong>password</strong>`,
  description: `To reset your password, simply enter a new password below and confirm it and then continue`,
  formTitle: 'Create a new password',
});

export default ResetPassword;
