import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

// Constants
import { COLLECTION_DETAILS_TYPE } from 'constants/api-types';
import { DEFAULT_COLLECTION_DETAILS } from 'modules/User/MyAccount/awaiting-collection/collection-details/constants';

// Styles
import './index.scss';

const CollectionDetails = ({ firstName, lastName, phone, email, weight, vrm, vin, address1, address2, postCode }) => (
  <Container className="collection-details">
    <Row>
      <h1 className="collection-details__title">Collection details</h1>
    </Row>

    <Row>
      <Col md={4} className="collection-details__info">
        <div>
          <p className="collection-details__info-item">{`${firstName} ${lastName}`}</p>
          <p className="collection-details__info-item">{address2}</p>
          <p className="collection-details__info-item">{address1}</p>
          <p className="collection-details__info-item">{postCode}</p>
          <p className="collection-details__info-item">{phone}</p>
        </div>
      </Col>
      <Col md={4}>
        <p className="collection-details__info-item line-height-4">{email}</p>

        <div>
          <p className="collection-details__info-item line-height-4">
            <strong>Weight</strong> - {weight}
          </p>
          <p className="collection-details__info-item line-height-4">
            <strong>VRM</strong> - {vrm}
          </p>
          <p className="collection-details__info-item line-height-4">
            <strong>VIN</strong> - {vin}
          </p>
        </div>
      </Col>
      <Col md={{ span: 3, offset: 1 }}>
        <Button className="collection-details__button">{`Call Seller on ${phone}`}</Button>
        <Button variant="dark" className="collection-details__button">
          Get directions
        </Button>
        <Button variant="dark" className="btn btn-dark collection-details__button">
          Message seller
        </Button>
      </Col>
    </Row>
  </Container>
);

CollectionDetails.propTypes = COLLECTION_DETAILS_TYPE;
CollectionDetails.defaultProps = DEFAULT_COLLECTION_DETAILS;

export default CollectionDetails;
