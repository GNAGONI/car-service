import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';

import Page from 'components/page';
import Breadcrumbs from 'components/Breadcrumbs';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import TermsAndConditions from 'components/terms/termsAndConditions/TermsAndConditions';
import { WEBSITE_TERMS_HEADER, WEBSITE_TERMS_TEXT } from 'constants/termsAndConditions';

const BREADCRUMBS = [
  {
    name: 'Website & partner terms & conditions',
    link: '/terms',
  },
  {
    name: 'Website terms & conditions',
    link: '/terms/website',
  },
];

const WebsiteTermsAndConditions = ({ title }) => (
  <Page title={title}>
    <DefaultHeader />
    <TermsAndConditions>
      <Breadcrumbs breadcrumbs={BREADCRUMBS} />
      <Container fluid className="layout-p-0">
        <Row className="website-terms">
          <TermsAndConditions.Info header={WEBSITE_TERMS_HEADER} text={WEBSITE_TERMS_TEXT} />
          <TermsAndConditions.Media />
        </Row>
      </Container>
    </TermsAndConditions>
    <Footer />
  </Page>
);

WebsiteTermsAndConditions.propTypes = {
  title: PropTypes.string,
};

WebsiteTermsAndConditions.defaultProps = {
  title: 'Website terms & conditions',
};

export default WebsiteTermsAndConditions;
