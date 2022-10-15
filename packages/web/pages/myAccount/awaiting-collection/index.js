import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';
import client from '@car-service/api-client';

// Components
import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import Subnav from 'modules/User/MyAccount/common/myAccountSubnav';
import Breadcrumbs from 'components/Breadcrumbs';
import PartnerPortalAside from 'components/partnerPortal/partnerPortalAside';
import AwaitingCollectionContent from 'modules/User/MyAccount/awaiting-collection/components/AwaitingCollectionContent';
import PartnerPortalHeader from 'components/partnerPortal/partnerPortalHeader';

// Constants
import { iconAwaitingSvg } from 'static/images/icons';

const AwaitingCollectionPage = ({ content, title }) => (
  <Page title="Awaiting Collection">
    <DefaultHeader />
    <main id="main" className="bg-before-white">
      <Subnav />
      <Breadcrumbs />
      <PartnerPortalHeader icon={iconAwaitingSvg} title={title} content={content} />

      <Container className="twocolumns">
        <Row className="flex-lg-row mb-5">
          <Col lg={9} className="mb-5">
            <AwaitingCollectionContent />
          </Col>
          <Col lg={3}>
            <PartnerPortalAside />
          </Col>
        </Row>
      </Container>
    </main>
    <Footer />
  </Page>
);

AwaitingCollectionPage.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
};

AwaitingCollectionPage.defaultProps = {
  content: null,
  title: '',
};

AwaitingCollectionPage.getInitialProps = async () => {
  try {
    return await client.pageData.getAwaitingCollectionPageData();
  } catch (e) {
    return {};
  }
};

export default AwaitingCollectionPage;
