import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';

import client from '@car-service/api-client';

import PopularLocations from 'modules/car-auctions/locations/components/PopularLocations';
import ViewMoreLocations from 'modules/car-auctions/locations/components/ViewMoreLocations';

import Auction from 'containers/auction';

import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import Intro from 'containers/intro';
import Subnav from 'modules/car-auctions/common/carAuctionsSubnav';
import Breadcrumbs from 'components/Breadcrumbs';
import AuctionFooter from 'components/auctionFooter';
import SectionHeader from 'components/sectionHeader';

import { LOCATIONS_TYPE, POPULAR_LOCATIONS_TYPE } from 'constants/api-types';

const RegionAuctions = ({
  title,
  fields: {
    'top-block-title': topBlockTitle,
    'top-block-content': topBlockContent,
    bottom_block_title: bottomBlockTitle,
    bottom_block_description_left: bottomBlockDescriptionLeft,
    bottom_block_description_right: bottomBlockDescriptionRight,
    bottom_read_more_block_description_left: bottomReadMoreBlockDescriptionLeft,
    bottom_read_more_block_description_right: bottomReadMoreBlockDescriptionRight,
  } = {},
  popularLocations,
  locations,
  name,
}) => (
  <Page title={title}>
    <DefaultHeader />
    <Intro />
    <main id="main">
      <div className="car-auction__header">
        <Container>
          <Row>
            <Col>
              <Subnav />
              <Breadcrumbs />
              <section className="content section-regions">
                <SectionHeader title={topBlockTitle || name} subtitle={topBlockContent} />
                <PopularLocations popularLocations={popularLocations} />
                <ViewMoreLocations locations={locations} />
              </section>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <Auction title={topBlockTitle} />
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

RegionAuctions.getInitialProps = async ({ query: { region } }) => {
  try {
    const { fields, id, title, name } = await client.locations.getRegionPageData(region);
    const popularLocations = await client.locations.getPopularLocations(id);
    const locations = await client.locations.getLocations({ type: 'region', value: region });

    return { title, fields, name, popularLocations, locations };
  } catch (e) {
    return {};
  }
};

RegionAuctions.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  fields: PropTypes.shape({
    'top-block-title': PropTypes.string,
    'top-block-content': PropTypes.string,
    bottom_block_description_right: PropTypes.string,
    bottom_read_more_block_description_left: PropTypes.string,
  }),
  popularLocations: POPULAR_LOCATIONS_TYPE,
  locations: LOCATIONS_TYPE,
};

RegionAuctions.defaultProps = {
  title: '',
  name: '',
  fields: {
    'top-block-title': '',
    'top-block-content': '',
    bottom_block_description_right: '',
    bottom_read_more_block_description_left: '',
  },
  popularLocations: [],
  locations: {},
};

export default withRouter(RegionAuctions);
