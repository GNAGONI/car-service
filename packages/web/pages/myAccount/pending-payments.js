import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';
import client from '@car-service/api-client';

import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import PendingPaymentsMainContent from 'components/pendingPayments/pendingPaymentsMainContent';
import PartnerPortalAside from 'components/partnerPortal/partnerPortalAside';
import Subnav from 'modules/User/MyAccount/common/myAccountSubnav';
import PartnerPortalHeader from 'components/partnerPortal/partnerPortalHeader';
import { iconPendingSvg } from 'static/images/icons';
import { authentificatedRoute } from '../../lib/routes';

const PendingPaymentsPage = ({ content, title }) => (
  <Page title="Pending payments">
    <DefaultHeader />
    <main id="main" className="bg-before-white">
      <Subnav />
      <PartnerPortalHeader title={title} content={content} icon={iconPendingSvg} />
      <Container className="twocolumns">
        <Row className="flex-lg-row mb-5">
          <Col lg={9} className="mb-5">
            <PendingPaymentsMainContent />
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

PendingPaymentsPage.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
};

PendingPaymentsPage.defaultProps = {
  content: null,
  title: '',
};

PendingPaymentsPage.getInitialProps = async ctx => {
  try {
    authentificatedRoute(ctx);
    return await client.pageData.getPendingPaymentsPageData();
  } catch (e) {
    return {};
  }
};

export default PendingPaymentsPage;
