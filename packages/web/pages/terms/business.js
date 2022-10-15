import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';

import Page from 'components/page';
import Breadcrumbs from 'components/Breadcrumbs';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import TermsAndConditions from 'components/terms/termsAndConditions/TermsAndConditions';
import { BUSINESS_TERMS_HEADER, BUSINESS_TERMS_TEXT } from 'constants/termsAndConditions';

const BREADCRUMBS = [
  {
    name: 'Website & partner terms & conditions',
    link: '/terms',
  },
  {
    name: 'Partner terms & conditions',
    link: '/terms/partner',
  },
  {
    name: 'Business terms & conditions',
    link: '/terms/partner/business',
  },
];

const BusinessTermsAndConditions = ({ title }) => (
  <Page title={title}>
    <DefaultHeader />
    <TermsAndConditions>
      <Breadcrumbs breadcrumbs={BREADCRUMBS} />
      <Container fluid className="layout-p-0">
        <Row className="website-terms business-terms">
          <TermsAndConditions.Info header={BUSINESS_TERMS_HEADER} text={BUSINESS_TERMS_TEXT} />
          <TermsAndConditions.Media />
        </Row>
      </Container>
    </TermsAndConditions>
    <Footer />
  </Page>
);

BusinessTermsAndConditions.propTypes = {
  title: PropTypes.string,
};

BusinessTermsAndConditions.defaultProps = {
  title: 'Business terms & conditions',
};

export default BusinessTermsAndConditions;
