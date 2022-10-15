import React, { Fragment } from 'react';
import { Row, Container } from 'react-bootstrap';

// Components
import Breadcrumbs from 'components/Breadcrumbs';
import Subnav from 'components/subnav';
import CollectionDetails from 'modules/User/MyAccount/awaiting-collection/collection-details/components/CollectionDetails';

// Types
import { COLLECTION_DETAILS_TYPE } from 'constants/api-types';
import { DEFAULT_COLLECTION_DETAILS } from 'modules/User/MyAccount/awaiting-collection/collection-details/constants';

// Styles
import './index.scss';

const CollectionDetailsHeader = ({ collectionDetails }) => (
  <Fragment>
    <Container>
      <Row className="justify-content-center">
        <Subnav />
      </Row>
    </Container>

    <div className="collection-details-header__content">
      <Container>
        <Row className="pt-3">
          <Breadcrumbs />
        </Row>
      </Container>

      <CollectionDetails {...collectionDetails} />
    </div>
  </Fragment>
);

CollectionDetailsHeader.propTypes = {
  collectionDetails: COLLECTION_DETAILS_TYPE,
};

CollectionDetailsHeader.defaultProps = {
  collectionDetails: DEFAULT_COLLECTION_DETAILS,
};

export default CollectionDetailsHeader;
