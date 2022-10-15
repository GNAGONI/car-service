import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import client from '@car-service/api-client';

import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Subnav from 'modules/car-auctions/common/carAuctionsSubnav';
import Breadcrumbs from 'components/Breadcrumbs';
import Intro from 'containers/intro';
import Footer from 'components/Footer';
import CarMakesHeader from 'modules/car-auctions/car-makes/components/CarMakesHeader';
import AuctionContainer from 'containers/auction';
import AuctionFooter from 'components/auctionFooter';

const filtersToHide = { carMake: true, carModel: true };

const CarMakes = ({
  title,
  fields: {
    top_block_title: topBlockTitle,
    top_block_description: topBlockDescription,
    search_block_title: searchBlockTitle,
    search_block_description: searchBlockDescription,
    bottom_block_title: bottomBlockTitle,
    bottom_block_description_left: bottomBlockDescriptionLeft,
    bottom_block_description_right: bottomBlockDescriptionRight,
    bottom_read_more_block_description_left: bottomReadMoreBlockDescriptionLeft,
    bottom_read_more_block_description_right: bottomReadMoreBlockDescriptionRight,
    'auctions-brand-logo': auctionsBrandLogo,
  },
  models,
  router: {
    query: { carMake },
  },
}) => (
  <Page title={title}>
    <div className="common-page-container">
      <DefaultHeader />
      <Intro />
      <Subnav />
      <main id="main">
        <div className="car-auction__header">
          <Container>
            <Breadcrumbs />
            <CarMakesHeader
              title={topBlockTitle}
              subtitle={topBlockDescription}
              carMake={carMake}
              logo={auctionsBrandLogo?.convertions?.small}
              models={models}
            />
          </Container>
          <Container>
            <Row>
              <Col>
                <AuctionContainer
                  title={searchBlockTitle}
                  description={searchBlockDescription}
                  presetFilters={{ carMake }}
                  hideFilters={filtersToHide}
                />
              </Col>
            </Row>
            <AuctionFooter
              bottomBlockTitle={bottomBlockTitle}
              bottomBlockDescriptionLeft={bottomBlockDescriptionLeft}
              bottomBlockDescriptionRight={bottomBlockDescriptionRight}
              bottomReadMoreBlockDescriptionLeft={bottomReadMoreBlockDescriptionLeft}
              bottomReadMoreBlockDescriptionRight={bottomReadMoreBlockDescriptionRight}
            />
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  </Page>
);

CarMakes.getInitialProps = async ({ query: { carMake } }) => {
  try {
    const models = await client.carModels.getCarModelsData(carMake);
    const { title, fields } = await client.pageData.getCarMakesPageData(carMake);

    return { models, title, fields };
  } catch (e) {
    return {};
  }
};

CarMakes.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.shape({
    top_block_title: PropTypes.string,
    top_block_description: PropTypes.string,
    search_block_description: PropTypes.string,
    bottom_block_title: PropTypes.string,
    bottom_block_description_left: PropTypes.string,
    bottom_block_description_right: PropTypes.string,
    bottom_read_more_block_description_left: PropTypes.string,
    bottom_read_more_block_description_right: PropTypes.string,
    'auctions-brand-logo': PropTypes.shape({
      fullUrl: PropTypes.string,
      convertions: PropTypes.shape({
        small: PropTypes.string,
      }),
    }),
  }),
  carMakeLogo: PropTypes.shape({
    logo: PropTypes.string,
  }),
  router: PropTypes.shape({
    query: PropTypes.shape({
      carMake: PropTypes.string,
    }),
  }),
  models: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      carModelName: PropTypes.string,
      logo: PropTypes.string,
    }),
  ),
};

CarMakes.defaultProps = {
  title: '',
  fields: {
    top_block_title: '',
    top_block_description: '',
    search_block_title: '',
    search_block_description: '',
    bottom_block_title: '',
    bottom_block_description_left: '',
    bottom_block_description_right: '',
    bottom_read_more_block_description_left: '',
    bottom_read_more_block_description_right: '',
    'auctions-brand-logo': {
      fullUrl: '',
      convertions: {
        small: '',
      },
    },
  },
  models: [],
};

export default withRouter(CarMakes);
