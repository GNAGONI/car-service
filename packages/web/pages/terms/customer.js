import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';

import Page from 'components/page';
import Breadcrumbs from 'components/Breadcrumbs';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import CustomerTerms from 'components/terms/termsAndConditions/TermsAndConditions';
import { CUSTOMER_TERMS_HEADER, CUSTOMER_TERMS_TEXT } from 'constants/termsAndConditions';

const BREADCRUMBS = [
  {
    name: 'Website & partner terms & conditions',
    link: '/terms',
  },
  {
    name: 'Customer terms & conditions',
    link: '/terms/customer',
  },
];

const CustomerTermsAndConditions = ({ title }) => (
  <Page title={title}>
    <DefaultHeader />
    <CustomerTerms>
      <Breadcrumbs breadcrumbs={BREADCRUMBS} />
      <Container fluid className="layout-p-0">
        <Row className="website-terms centralized-header">
          <CustomerTerms.Info header={CUSTOMER_TERMS_HEADER} text={CUSTOMER_TERMS_TEXT} />
          <CustomerTerms.Media />
        </Row>
      </Container>
    </CustomerTerms>
    <Footer />
  </Page>
);

CustomerTermsAndConditions.propTypes = {
  title: PropTypes.string,
};

CustomerTermsAndConditions.defaultProps = {
  title: 'Customer terms & condition',
};

export default CustomerTermsAndConditions;
