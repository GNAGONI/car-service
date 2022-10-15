import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';
import client from '@car-service/api-client';

import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import PartnerPortalAside from 'components/partnerPortal/partnerPortalAside';
import LiveAuctionMainContent from 'containers/liveAuction/liveAuctionMainContentContainer';
import Subnav from 'modules/User/MyAccount/common/myAccountSubnav';
import PartnerPortalHeader from 'components/partnerPortal/partnerPortalHeader';

import { iconLiveSvg } from 'static/images/icons';
import { authentificatedRoute } from '../../lib/routes';

const LiveAuctionsPage = ({ content, title, fields }) => (
  <Page title="Live auctions">
    <DefaultHeader />
    <main id="main" className="bg-before-white">
      <Subnav />
      <PartnerPortalHeader title={title} content={content} icon={iconLiveSvg} />
      <Container className="twocolumns">
        <Row className="flex-lg-row mb-5">
          <Col lg={9} className="mb-5">
            <LiveAuctionMainContent fields={fields} />
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

LiveAuctionsPage.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
  fields: PropTypes.shape({
    personalized: PropTypes.string,
    bidding_on: PropTypes.string,
    watched: PropTypes.string,
    won: PropTypes.string,
  }),
};

LiveAuctionsPage.defaultProps = {
  content: null,
  title: '',
  fields: {},
};

LiveAuctionsPage.getInitialProps = async ctx => {
  try {
    authentificatedRoute(ctx);
    return await client.pageData.getLiveAuctionPageData();
  } catch (e) {
    return {};
  }
};

export default LiveAuctionsPage;
