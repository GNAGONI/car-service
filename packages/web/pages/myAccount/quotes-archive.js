import React from 'react';
import PropTypes from 'prop-types';
import client from '@car-service/api-client';
import { Row, Col, Container } from 'react-bootstrap';

import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import PartnerPortalAside from 'components/partnerPortal/partnerPortalAside';
import QuotesArchiveContent from 'components/quotesArchive/quotesArchiveContent';
import Subnav from 'modules/User/MyAccount/common/myAccountSubnav';
import PartnerPortalHeader from 'components/partnerPortal/partnerPortalHeader';
import { iconQuotes } from 'static/images/icons';
import { authentificatedRoute } from '../../lib/routes';

const QuotesArchivePage = ({ content, title }) => (
  <Page title="Quotes archive">
    <DefaultHeader />
    <main id="main" className="bg-before-white">
      <Subnav />
      <PartnerPortalHeader title={title} content={content} icon={iconQuotes} />

      <Container className="twocolumns">
        <Row className="flex-lg-row mb-5">
          <Col lg={9} className="mb-5">
            <QuotesArchiveContent />
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

QuotesArchivePage.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
};

QuotesArchivePage.defaultProps = {
  content: null,
  title: '',
};

QuotesArchivePage.getInitialProps = async ctx => {
  try {
    authentificatedRoute(ctx);
    return await client.pageData.getQuotesArchivePageData();
  } catch (e) {
    return {};
  }
};

export default QuotesArchivePage;
