import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';

import AuctionYourCarMultistep from 'modules/car-auctions/auction-your-car';

const AuctionYourCar = () => (
  <Page title="Auction Your Car">
    <DefaultHeader />
    <main id="main">
      <Container>
        <Row>
          <Col>
            <AuctionYourCarMultistep />
          </Col>
        </Row>
      </Container>
    </main>
    <Footer />
  </Page>
);

export default AuctionYourCar;
