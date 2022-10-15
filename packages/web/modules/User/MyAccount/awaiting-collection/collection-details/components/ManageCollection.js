import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

// Constants
const MANAGE_COLLECTION_DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet.';

const ManageCollection = () => (
  <Row className="collection-details-page__block">
    <Col md={8}>
      <h1 className="collection-details-page__title">Manage your collection</h1>
      <p className="collection-details-page__description">{MANAGE_COLLECTION_DESCRIPTION}</p>
    </Col>

    <Col md={4}>
      <Button type="button" size="lg" className="collection-details-page__button mb-4">
        Notify you&apos;re 30 minutes away
      </Button>
      <Button type="button" size="lg" className="collection-details-page__button">
        Manage your collection
      </Button>
    </Col>
  </Row>
);

export default ManageCollection;
