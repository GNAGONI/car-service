import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';

import { iconVehiclesSvg } from 'static/images/icons';
import List from 'components/list';
import LoadMore from 'components/loadMore';

const liveAuctionListHeader = [
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

export default class PendingPaymentsList extends PureComponent {
  static defaultProps = {
    items: [],
    getCarList: () => {},
    paging: {},
    filter: {},
  };

  static propTypes = {
    getCarList: PropTypes.func,
    paging: PropTypes.shape({
      offset: PropTypes.number,
      limit: PropTypes.number,
      totalNumberOfAuctions: PropTypes.number,
    }),
    filter: PropTypes.shape({
      type: PropTypes.string,
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
    const { getCarList, filter, paging, items } = this.props;

    if (!items.length) {
      getCarList({ ...filter, ...paging });
    }
  }

  onLoadMore = data => {
    const { getCarList, filter, paging } = this.props;

    getCarList({ ...filter, ...paging, ...data });
  };

  getListItem = item => {
    const { id, imgUrl, carMake, carModel, year, currentMaxBid, locationFar, location } = item;

    return (
      <Fragment key={id}>
        <div className="row__item live-list__item">
          <div className="product__detail">
            <div className="product-image">
              {imgUrl ? (
                <a href="#">
                  <img className="img-fluid" src={imgUrl} alt="description" />
                </a>
              ) : (
                <div className="awaiting-box">
                  <img className="img-fluid" src={iconVehiclesSvg} alt="escription" />
                  <span className="awaiting-text">Awaiting Image</span>
                </div>
              )}
            </div>

            <div className="text-holder">
              <a href="#">
                {year} {carMake} <br /> {carModel}
              </a>
            </div>
          </div>
        </div>
        <div className="row__item live-list__item live-list__item-pl">
          <div className="price">£{currentMaxBid}</div>
        </div>
        <div className="row__item live-list__item live-list__item-pl">
          <address>
            {location} <span className="text-count">({locationFar})</span>
          </address>
        </div>
        <div className="row__item live-list__item live-list__item-pl">
          <Link route="#">
            <a className="btn btn-success">Pay Now</a>
          </Link>
        </div>
      </Fragment>
    );
  };

  render() {
    const {
      items,
      paging: { offset, limit, totalNumberOfAuctions },
    } = this.props;

    return (
      <LoadMore
        onLoadMore={this.onLoadMore}
        offset={offset}
        limit={limit}
        isShowButton={items.length !== totalNumberOfAuctions}
      >
        <div className="pending-payments__list">
          <List headers={liveAuctionListHeader} items={items} keyProp="id" renderer={this.getListItem} />
        </div>
      </LoadMore>
    );
  }
}
