import React, { PureComponent } from 'react';

import QuoterArchiveCarList from 'containers/quotesArchive/quotesArchiveCarListContainer';
import QuotesAuctionFilterForm from './quotesArchiveFilterForm';
import { PARTNER_PORTAL_LIST_EMPTY_MESSAGE } from '../partnerPortal/listEmpty';

export default class QuotesArchiveContent extends PureComponent {
  render() {
    return (
      <div className="mb-2 main-content">
        <QuotesAuctionFilterForm />
        <QuoterArchiveCarList listEmptyMessage={PARTNER_PORTAL_LIST_EMPTY_MESSAGE.quotesArchive} />
      </div>
    );
  }
}
