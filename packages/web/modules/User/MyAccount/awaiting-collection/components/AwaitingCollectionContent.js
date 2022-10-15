import React from 'react';

// Components
import AuctionsFilterForm from 'components/auctionsFilterForm';
import AwatingCollectionList from 'modules/User/MyAccount/awaiting-collection/components/AwaitingCollectionList/container';

// Constants
import { PARTNER_PORTAL_LIST_EMPTY_MESSAGE } from 'components/partnerPortal/listEmpty';

const AwaitingCollectionContent = () => (
  <div className="mb-2 main-content">
    <AuctionsFilterForm />
    <AwatingCollectionList listEmptyMessage={PARTNER_PORTAL_LIST_EMPTY_MESSAGE.awaitingCollection} />
  </div>
);

export default AwaitingCollectionContent;
