import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';

import Page from 'components/page';
import Breadcrumbs from 'components/Breadcrumbs';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import CookiePolicy from 'components/terms/termsAndConditions/TermsAndConditions';
import { BREADCRUMBS, COOKIE_POLICY_HEADER, COOKIE_POLICY_TEXT } from 'constants/policy';

const CookiePolicyAndConditions = ({ title }) => (
  <Page title={title}>
    <DefaultHeader />
    <CookiePolicy>
      <Breadcrumbs breadcrumbs={BREADCRUMBS} />
      <Container fluid className="layout-p-0">
        <Row className="website-terms">
          <CookiePolicy.Info header={COOKIE_POLICY_HEADER} text={COOKIE_POLICY_TEXT} />
          <CookiePolicy.Media />
        </Row>
      </Container>
    </CookiePolicy>
    <Footer />
  </Page>
);

CookiePolicyAndConditions.propTypes = {
  title: PropTypes.string,
};

CookiePolicyAndConditions.defaultProps = {
  title: 'Cookie policy',
};

export default CookiePolicyAndConditions;
