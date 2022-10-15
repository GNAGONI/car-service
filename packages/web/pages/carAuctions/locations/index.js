import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import client from '@car-service/api-client';

import LocationsContainer from 'modules/car-auctions/locations/components/LocationsMapContainer';
import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Subnav from 'modules/car-auctions/common/carAuctionsSubnav';
import Footer from 'components/Footer';
import Intro from 'containers/intro';

const BrowseByMake = ({
  title,
  fields: {
    'info-block-title': infoBlockTitle,
    'info-block-content1': infoBlockContent1,
    'info-block-content2': infoBlockContent2,
  },
}) => (
  <Page title={title}>
    <DefaultHeader />
    <Intro />
    <main id="main">
      <Container>
        <Subnav />
        <Row>
          <Col>
            <LocationsContainer
              infoBlockTitle={infoBlockTitle}
              infoBlockContent1={infoBlockContent1}
              infoBlockContent2={infoBlockContent2}
              infoBlockContent3="Enter your postcode or location to find car auctions near you"
              infoBlockContent4="Select a region opposite to find car auctions in your region"
            />
          </Col>
        </Row>
      </Container>
    </main>
    <Footer />
  </Page>
);

BrowseByMake.getInitialProps = async () => {
  try {
    const { title, fields } = await client.pageData.getCarAuctionsByLocationPageData();
    return { title, fields };
  } catch (e) {
    return {};
  }
};

BrowseByMake.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.shape({
    'info-block-title': PropTypes.string,
    'info-block-content1': PropTypes.string,
    'info-block-content2': PropTypes.string,
  }),
};

BrowseByMake.defaultProps = {
  title: '',
  fields: {
    'info-block-title': '',
    'info-block-content1': '',
    'info-block-content2': '',
  },
};
export default BrowseByMake;
