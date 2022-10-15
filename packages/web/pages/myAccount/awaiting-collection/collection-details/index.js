import React from 'react';
import client from '@car-service/api-client';
import { Row, Container, Button } from 'react-bootstrap';

// Components
import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import Notes from 'modules/User/MyAccount/awaiting-collection/collection-details/components/Notes';
import ManageCollection from 'modules/User/MyAccount/awaiting-collection/collection-details/components/ManageCollection';
import AuctionDetails from 'containers/auction/AuctionDetails';
import CreateNewCollection from 'modules/User/MyAccount/awaiting-collection/collection-details/components/CreateNewCollection';
import CollectionDetailsHeader from 'modules/User/MyAccount/awaiting-collection/collection-details/components/CollectionDetailsHeader';
import ConfirmCollectionDate from 'modules/User/MyAccount/awaiting-collection/collection-details/components/ConfirmCollectionDate';

// Constants
import { COLLECTION_DETAILS_TYPE } from 'constants/api-types';
import { DEFAULT_COLLECTION_DETAILS } from 'modules/User/MyAccount/awaiting-collection/collection-details/constants';

// Styles
import './styles.scss';

const CollectionDetailsPage = ({ collectionDetails = DEFAULT_COLLECTION_DETAILS }) => {
  const { phone, preferredCollectionTime, notes } = collectionDetails;

  return (
    <Page title="Collection details">
      <DefaultHeader />
      <main className="bg-before-white collection-details-page">
        <CollectionDetailsHeader collectionDetails={collectionDetails} />
        <Container>
          <ConfirmCollectionDate preferredCollectionTime={preferredCollectionTime} />
          <CreateNewCollection phone={phone} />
          <ManageCollection />
          <Notes notesList={notes} />

          {/* Cancel request button blovk */}
          <Row className="collection-details-page__block justify-content-center">
            <Button type="button" className="btn btn-lg btn-danger collection-details-page__button">
              Request a cancellation
            </Button>
          </Row>

          <div className="pt-5">
            <AuctionDetails disableEdit />
          </div>
        </Container>
      </main>
      <Footer />
    </Page>
  );
};

CollectionDetailsPage.propTypes = {
  collectionDetails: COLLECTION_DETAILS_TYPE,
};

CollectionDetailsPage.getInitialProps = async () => {
  const collectionDetails = await client.awaitingCollection.getCollectionDetails();
  return { collectionDetails };
};

export default CollectionDetailsPage;
