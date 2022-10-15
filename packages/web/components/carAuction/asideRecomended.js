import React from 'react';
import { Link } from 'server/pages';
import { Container, Row, Col } from 'react-bootstrap';

import { recommendationSvg } from 'static/images/icons';

export default () => (
  <aside className="aside-recommend text-default">
    <Container>
      <Row>
        <Col md={8} lb={9} className="text-block">
          <div className="text-box">
            <h2>
              Advertise your car to over <strong>16,000 garages across the UK</strong>
            </h2>
          </div>
          <div className="btn-block">
            <Link route="/car-auctions/auction-your-car">
              <a className="btn btn-primary btn-lg">Auction your car</a>
            </Link>
          </div>
        </Col>
        <Col md={3} className="d-none d-md-flex">
          <div className="img-area">
            <img src={recommendationSvg} alt="Would you recommend your car?" width="143" height="153" />
          </div>
        </Col>
      </Row>
    </Container>
  </aside>
);
