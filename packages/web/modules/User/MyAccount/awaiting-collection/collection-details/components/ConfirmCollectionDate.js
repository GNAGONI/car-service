import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

// Components
import PreferredCollectionTime from 'components/PreferredCollectionTime';

// Constants
import { COLLECTION_DETAILS_TYPE } from 'constants/api-types';
import { DEFAULT_COLLECTION_DETAILS } from 'modules/User/MyAccount/awaiting-collection/collection-details/constants';

const PREFERRED_COLLECTION_TIME_DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euismod tincidunt ut laoreet.';

const ConfirmCollectionDate = ({ preferredCollectionTime }) => (
  <Row className="collection-details-page__block">
    <Col md={8}>
      <Row>
        <h1 className="collection-details-page__title">Customer&apos;s preferred collection times</h1>
        <p className="collection-details-page__description">{PREFERRED_COLLECTION_TIME_DESCRIPTION}</p>
      </Row>

      <Row className="collection-details-page__buttons">
        <PreferredCollectionTime preferredCollectionTime={preferredCollectionTime} />
      </Row>
    </Col>

    <Col md={4}>
      <Button type="button" className="btn btn-lg collection-details-page__button">
        Confirm selected collection date
      </Button>
    </Col>
  </Row>
);

ConfirmCollectionDate.propTypes = {
  preferredCollectionTime: COLLECTION_DETAILS_TYPE.preferredCollectionTime,
};

ConfirmCollectionDate.defaultProps = {
  preferredCollectionTime: DEFAULT_COLLECTION_DETAILS.preferredCollectionTime,
};

export default ConfirmCollectionDate;
