import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import { authentificatedRoute } from 'lib/routes';
import Page from 'components/page';
import { CustomerPortalHeader } from 'components/Header';
import Footer from 'components/Footer';
import Breadcrumbs from 'components/Breadcrumbs';
import { ChangePasswordHeader, ChangePasswordForm } from 'modules/User/MyAccount/Settings/ChangePassword';
import { getUserDataRequest } from '@car-service/redux/actions/user';

const ChangePassword = ({ title, description }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDataRequest());
  }, []);

  return (
    <Page title="Change password">
      <CustomerPortalHeader />
      <main id="main">
        <section className="change-password-form content extend form-large">
          <Container className="pt-3">
            <Breadcrumbs />
            <Row className="content-holder pt-0">
              <Col xl={6} lg={8} md={9} className="p-3">
                <ChangePasswordHeader title={title} description={description} />
                <ChangePasswordForm />
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </Page>
  );
};

ChangePassword.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

ChangePassword.defaultProps = {
  title: '',
  description: '',
};

ChangePassword.getInitialProps = async ctx => {
  authentificatedRoute(ctx);

  return {
    title: 'Change password',
    description:
      'To change your password, simply enter your old password, then enter a new password and then confirm the new one',
  };
};

export default ChangePassword;
