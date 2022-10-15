import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';
import { iconNoPending } from 'static/images/icons';

export const PARTNER_PORTAL_LIST_EMPTY_MESSAGE = {
  pendingPayments: 'You have no pending payments',
  liveAuction: {
    personalized: 'You have no live auctions (Personalised auctions)',
    bidding_on: 'You have no live auctions (Bidding on)',
    watched: 'You have no live auctions (Watched cars)',
    won: 'You have no live auctions (Won (Pending))',
  },
  awaitingCollection: 'You have no awaiting collection',
  quotesArchive: 'You have no quotest archive collection',
};

export default class ListEmpty extends PureComponent {
  static propTypes = {
    listEmptyMessage: PropTypes.string,
  };

  static defaultProps = {
    listEmptyMessage: null,
  };

  render() {
    const { listEmptyMessage } = this.props;

    return (
      <div className="pending-paymants">
        <section className="no-pending-block">
          <div className="align">
            <div className="icon-holder">
              <img src={iconNoPending} width="159" height="106" alt="description" />
            </div>
            <p>{listEmptyMessage || 'List Empty'}</p>
            <Link route="#">
              <a className="btn btn-new btn-success widget-btn">Return to Dashboard</a>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}
