import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import client from '@car-service/api-client';

import { PAGE_DATA_FIELDS_TYPE as FieldsPropTypes } from 'constants/api-types';

import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import Intro from 'containers/intro';
import Subnav from 'modules/car-auctions/common/carAuctionsSubnav';
import Breadcrumbs from 'components/Breadcrumbs';
import Auction from 'containers/auction';
import AuctionFooter from 'components/auctionFooter';
import SectionHeader from 'components/sectionHeader';

const LocationAuctions = ({
  name,
  fields: {
    'top-block-title': topBlockTitle,
    'top-block-content': topBlockContent,
    bottom_block_title: bottomBlockTitle,
    bottom_block_description_left: bottomBlockDescriptionLeft,
    bottom_block_description_right: bottomBlockDescriptionRight,
    bottom_read_more_block_description_left: bottomReadMoreBlockDescriptionLeft,
    bottom_read_more_block_description_right: bottomReadMoreBlockDescriptionRight,
  },
}) => (
  <Page title="Car.service">
    <DefaultHeader />
    <Intro />
    <main id="main">
      <div className="car-auction__header">
        <Container>
          <Row>
            <Col>
              <Subnav />
              <Breadcrumbs />
              <section className="section-regions">
                <SectionHeader title={topBlockTitle || name} subtitle={topBlockContent} />
              </section>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <Auction />
              <AuctionFooter
                bottomBlockTitle={bottomBlockTitle}
                bottomBlockDescriptionLeft={bottomBlockDescriptionLeft}
                bottomBlockDescriptionRight={bottomBlockDescriptionRight}
                bottomReadMoreBlockDescriptionLeft={bottomReadMoreBlockDescriptionLeft}
                bottomReadMoreBlockDescriptionRight={bottomReadMoreBlockDescriptionRight}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </main>
    <Footer />
  </Page>
);

LocationAuctions.getInitialProps = async ({ query: { location } }) => {
  try {
    return await client.pageData.getLocationPageData(location);
  } catch (e) {
    return {};
  }
};

LocationAuctions.propTypes = {
  name: PropTypes.string,
  fields: FieldsPropTypes,
};

LocationAuctions.defaultProps = {
  name: '',
  fields: {},
};

export default withRouter(LocationAuctions);
