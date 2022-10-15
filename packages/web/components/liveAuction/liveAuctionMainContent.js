import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import LiveAuctionList from 'containers/liveAuction/liveAuctionListContainer';
import Tabs from 'components/tabs/tabs';
import AuctionsFilterForm from 'components/auctionsFilterForm';
import { PARTNER_PORTAL_LIST_EMPTY_MESSAGE } from 'components/partnerPortal/listEmpty';

const tabSetItems = [
  {
    label: 'Personalised auctions',
    key: 'personalized',
  },
  {
    label: 'Bidding on',
    key: 'bidding_on',
  },
  {
    label: 'Watched cars',
    key: 'watched',
  },
  {
    label: 'Won (Pending)',
    key: 'won',
  },
];

export default class LiveAuctionMainContent extends PureComponent {
  state = {
    activeFieldKey: 'personalized',
  };

  static propTypes = {
    fields: PropTypes.shape({
      personalized: PropTypes.string,
      bidding_on: PropTypes.string,
      watched: PropTypes.string,
      won: PropTypes.string,
    }),
    setCarListFilter: PropTypes.func,
    resetCarsList: PropTypes.func,
    isCarsListLoading: PropTypes.bool,
    router: PropTypes.object.isRequired,
  };

  static defaultProps = {
    fields: {},
    setCarListFilter: () => {},
    resetCarsList: () => {},
    isCarsListLoading: true,
  };

  static getDerivedStateFromProps({ router }) {
    const activeFieldKey = router.query.type;

    if (activeFieldKey) {
      return { activeFieldKey };
    }

    return null;
  }

  componentDidMount() {
    const {
      router: { query },
    } = this.props;

    const type = query.type ? query.type : tabSetItems[0].key;

    this.setCarListFilter({ type });
  }

  setCarListFilter(type) {
    this.props.setCarListFilter(type);
  }

  onTabChanged = activeFieldKey => {
    this.setCarListFilter({ type: activeFieldKey });
    this.setState({ activeFieldKey });
    this.updateQuery({ type: activeFieldKey });
    this.props.resetCarsList();
  };

  updateQuery(queryParams) {
    const { router } = this.props;
    const { query } = router;

    router.pushRoute('/my-account/live-auctions', { ...query, ...queryParams });
  }

  render() {
    const { fields, isCarsListLoading } = this.props;

    const { activeFieldKey } = this.state;

    return (
      <div className="mb-2 main-content">
        <Tabs
          items={tabSetItems}
          onTabClick={this.onTabChanged}
          activeKey={activeFieldKey}
          isShowContent={!isCarsListLoading}
          defaultKey={tabSetItems[0] && tabSetItems[0].key}
        >
          <>
            {fields && (
              <div className="tab-header mb-5 mr-md-3" dangerouslySetInnerHTML={{ __html: fields[activeFieldKey] }} />
            )}
            <AuctionsFilterForm />
            <LiveAuctionList listEmptyMessage={PARTNER_PORTAL_LIST_EMPTY_MESSAGE.liveAuction[activeFieldKey]} />
          </>
        </Tabs>
      </div>
    );
  }
}
