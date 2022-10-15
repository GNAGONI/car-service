import React, { Component } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';

import { iconThanks } from 'static/images/icons';

export default class CarAuctionBidPlaced extends Component {
  render() {
    return (
      <Alert className="alert alert-lg text-left bg-before-primary">
        <Row className="flex-row justify-content-center align-items-center">
          <Col lg={10} xl={9} className="col-12 alert-holder">
            <div className="icon-holder">
              <img width="75" height="82" alt="desctipiton" src={iconThanks} />
            </div>
            <div className="text-holder">
              <h2>Thank you, your bid has been placed!</h2>
              <div className="text">
                <p>
                  We’ll keep you up-to-date on how your bid is doing and if you have been successful in securing the
                  vehicle.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Alert>
    );
  }
}
