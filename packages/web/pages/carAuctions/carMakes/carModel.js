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
import AuctionContainer from 'containers/auction';
import CarMakesAndModelsHeader from 'modules/car-auctions/car-makes/components/CarMakesAndModelsHeader';

const filtersToHide = { carMake: true, carModel: true };

const CarMakesAndModelAuctions = ({
  title = '',
  name = '',
  fields: {
    model_logo: modelLogo = '',
    top_block_description: topBlockDescription = '',
    top_block_title: topBlockTitle = '',
  } = {},
  router: {
    query: { carMake, carModel },
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
            <CarMakesAndModelsHeader
              title={topBlockTitle}
              subtitle={topBlockDescription}
              logo={modelLogo}
              model={name}
            />
          </Container>
          <Container>
            <Row>
              <Col>
                <AuctionContainer presetFilters={{ carMake, carModel }} hideFilters={filtersToHide} />
              </Col>
            </Row>
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  </Page>
);

CarMakesAndModelAuctions.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  fields: PropTypes.shape({
    model_logo: PropTypes.string,
    top_block_description: PropTypes.string,
    top_block_title: PropTypes.string,
  }),
  router: PropTypes.object.isRequired,
};

CarMakesAndModelAuctions.getInitialProps = async ({ query: { carMake, carModel } }) => {
  try {
    return await client.carModels.getCarMakesAndModelsPageData({ carMake, carModel });
  } catch (e) {
    return {};
  }
};

export default withRouter(CarMakesAndModelAuctions);
