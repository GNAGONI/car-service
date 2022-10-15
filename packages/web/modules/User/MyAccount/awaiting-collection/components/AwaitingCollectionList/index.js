import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Components
import List from 'components/list';
import LoadMore from 'components/loadMore';
import AwaitingCollectionListItem from 'modules/User/MyAccount/awaiting-collection/components/AwaitingCollectionList/AwaitingCollectionListItem';

const awaitingCollectionListHeader = [
  {
    label: 'Car Details',
    key: 'carDetails',
  },
  {
    label: 'Winning Bid',
    key: 'winningBid',
  },
  {
    label: 'Location',
    key: 'location',
  },
  {
    label: 'Actions',
    key: 'actions',
  },
];

class AwaitingCollectionList extends PureComponent {
  static defaultProps = {
    items: [],
    getCarList: () => {},
    paging: {},
  };

  static propTypes = {
    getCarList: PropTypes.func,
    paging: PropTypes.shape({
      offset: PropTypes.number,
      limit: PropTypes.number,
      totalNumberOfAuctions: PropTypes.number,
    }),
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        carMake: PropTypes.string,
        carModel: PropTypes.string,
        numberOfBids: PropTypes.number,
        currentMaxBid: PropTypes.string,
        timeToEnd: PropTypes.number,
        watched: PropTypes.bool,
        imgUrl: PropTypes.string,
        year: PropTypes.number,
        location: PropTypes.string,
        locationFar: PropTypes.string,
      }),
    ),
  };

  componentDidMount() {
    const { getCarList, paging, items } = this.props;

    if (!items.length) {
      getCarList({ ...paging });
    }
  }

  onLoadMore = data => {
    const { getCarList, paging } = this.props;

    getCarList({ ...paging, ...data });
  };

  render() {
    const {
      items,
      paging: { offset, limit, totalNumberOfAuctions },
    } = this.props;

    return (
      <div>
        {
          <LoadMore
            onLoadMore={this.onLoadMore}
            offset={offset}
            limit={limit}
            isShowButton={items.length !== totalNumberOfAuctions}
          >
            <div className="awaiting-collection__list">
              <List
                headers={awaitingCollectionListHeader}
                items={items}
                keyProp="id"
                renderer={AwaitingCollectionListItem}
              />
            </div>
          </LoadMore>
        }
      </div>
    );
  }
}

export default AwaitingCollectionList;
