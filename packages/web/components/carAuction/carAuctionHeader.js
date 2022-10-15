import React, { PureComponent } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Router } from 'server/pages';

import Subnav from 'modules/car-auctions/common/carAuctionsSubnav';
import AuctionFilter from './auctionFilter';

export default class CarAuctionHeader extends PureComponent {
  onSelectorChanged(data) {
    Router.pushRoute('/car-auctions/car-makes', { carMake: data.label });
  }

  render() {
    return (
      <div className="car-auction__header">
        <Container>
          <Row>
            <Col>
              <Subnav />
            </Col>
          </Row>
        </Container>

        <div className="header__content">
          <Container>
            <Row>
              <Col>
                <AuctionFilter />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
