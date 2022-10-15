import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { COLLECTION_DETAILS_TYPE } from 'constants/api-types';
import { DEFAULT_COLLECTION_DETAILS } from 'modules/User/MyAccount/awaiting-collection/collection-details/constants';

// Constants
const CREATE_NEW_COLLECTION_DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet.';

const CreateNewCollection = ({ phone }) => (
  <Row className="collection-details-page__block">
    <Col md={8}>
      <h1 className="collection-details-page__title">Create a new collection date and time</h1>
      <p className="collection-details-page__description">{CREATE_NEW_COLLECTION_DESCRIPTION}</p>
      <div className="collection-details-page__buttons">
        <a href={`tel:${phone}`} className="btn btn-sm btn-lightest collection-details-page__button mr-4">
          Call on<strong>{` ${phone}`}</strong>
        </a>
        <Button type="button" size="sm" variant="dark" className="collection-details-page__button">
          Message seller
        </Button>
      </div>
    </Col>

    <Col md={4}>
      <Button type="button" size="lg" className="collection-details-page__button">
        Propose new collection time
      </Button>
    </Col>
  </Row>
);

CreateNewCollection.propTypes = {
  phone: COLLECTION_DETAILS_TYPE.phone,
};

CreateNewCollection.defaultProps = {
  phone: DEFAULT_COLLECTION_DETAILS.phone,
};

export default CreateNewCollection;
