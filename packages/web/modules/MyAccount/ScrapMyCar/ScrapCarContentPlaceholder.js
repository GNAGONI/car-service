import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import BaseForm from 'components/instantQuote/BaseForm';
import { iconScrapQuotes } from 'static/images/icons';

const ScrapCarContentPlaceholder = () => (
  <Container>
    <Row className="mt-3 text-center">
      <Col md={{ offset: 1, span: 10 }} className="bg-light mt-3 mb-5 pt-4 pb-4">
        <Col md={{ offset: 2, span: 8 }}>
          <img src={iconScrapQuotes} width="120px" alt="Get a quote" />
          <h1 className="mt-2 mb-2">
            You have <span className="text-strong">no previous scrap quotes</span>
          </h1>
          <p>
            It looks like you have no previous scrap quotes. To get an instant scrap car quote for your car, simply
            enter the car registration and postcode and click the get a quote button
          </p>
        </Col>
        <BaseForm formType="line" hasCarRegistrationInputImage buttonText="Get a quote" />
      </Col>
    </Row>
  </Container>
);

export default ScrapCarContentPlaceholder;
