import React from 'react';
import { Col } from 'react-bootstrap';

const SignUpHeader = () => (
  <header className="section-head text-center large pb-3">
    <Col md={{ span: 6, offset: 3 }}>
      <h2>
        Register for a <strong>customer account</strong>
      </h2>
      <p>
        if you&apos;re looking to get a quote, purchase a product or contribute to Car.service then please create a
        customer account below my filling in some details about yourself{' '}
      </p>
    </Col>
  </header>
);

export default SignUpHeader;
