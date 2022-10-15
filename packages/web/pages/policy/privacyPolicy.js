import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';

import Page from 'components/page';
import Breadcrumbs from 'components/Breadcrumbs';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import PrivacyPolicy from 'components/terms/termsAndConditions/TermsAndConditions';
import { BREADCRUMBS, PRIVACY_POLICY_HEADER, PRIVACY_POLICY_TEXT } from 'constants/policy';

const PrivacyPolicyAndConditions = ({ title }) => (
  <Page title={title}>
    <DefaultHeader />
    <PrivacyPolicy>
      <Breadcrumbs breadcrumbs={BREADCRUMBS} />
      <Container fluid className="layout-p-0">
        <Row className="website-terms centralized-header">
          <PrivacyPolicy.Info header={PRIVACY_POLICY_HEADER} text={PRIVACY_POLICY_TEXT} />
          <PrivacyPolicy.Media />
        </Row>
      </Container>
    </PrivacyPolicy>
    <Footer />
  </Page>
);

PrivacyPolicyAndConditions.propTypes = {
  title: PropTypes.string,
};

PrivacyPolicyAndConditions.defaultProps = {
  title: 'Privacy policy',
};

export default PrivacyPolicyAndConditions;
