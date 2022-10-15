import React, { PureComponent } from 'react';

import PendingPaymentsList from 'containers/pendingPayments/pendingPaymentsListContainer';
import AuctionsFilterForm from 'components/auctionsFilterForm';
import { PARTNER_PORTAL_LIST_EMPTY_MESSAGE } from '../partnerPortal/listEmpty';

export default class PendingPaymentsMainContent extends PureComponent {
  render() {
    return (
      <div className="mb-2 main-content">
        <AuctionsFilterForm />
        <PendingPaymentsList listEmptyMessage={PARTNER_PORTAL_LIST_EMPTY_MESSAGE.pendingPayments} />
      </div>
    );
  }
}
