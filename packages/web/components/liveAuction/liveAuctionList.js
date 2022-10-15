import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import { iconVehiclesSvg } from 'static/images/icons';
import List from 'components/list';
import LoadMore from 'components/loadMore';

const liveAuctionListHeader = [
  {
    label: 'Car Details',
    key: 'carDetails',
  },
  {
    label: 'Opening Bid',
    key: 'openingBid',
  },
  {
    label: 'location',
    key: 'location',
  },
  {
    label: 'Time remaining',
    key: 'timeRemaining',
  },
];

export default class LiveAuctionList extends PureComponent {
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

  getTimeToEnd(timeToEnd) {
    const oneSecs = 1000;
    const oneMin = 60 * oneSecs;
    const oneHour = 60 * oneMin;
    const oneDay = 24 * oneHour;

    const remainingDays = Math.floor(timeToEnd / oneDay);
    const daysTime = remainingDays * oneDay;

    const remainingHours = Math.floor((timeToEnd - daysTime) / oneHour);
    const hoursTime = remainingHours * oneHour;

    const remainingMins = Math.floor((timeToEnd - daysTime - hoursTime) / oneMin);
    const minTime = remainingHours * oneMin;

    const remainingSecs = Math.floor((timeToEnd - daysTime - hoursTime - minTime) / oneSecs);

    const time = `${remainingHours ? `${remainingHours} hours` : ''}
           ${remainingMins ? `${remainingMins} mins` : ''}
           ${remainingSecs ? `${remainingSecs} secs` : ''}`;

    return time;
  }

  // TODO new case for price and time is red
  getListItem = item => {
    const { id, imgUrl, carMake, carModel, year, currentMaxBid, numberOfBids, locationFar, location, timeToEnd } = item;

    const timeToNow = this.getTimeToEnd(timeToEnd);

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
          <div className={`price ${!numberOfBids ? 'text-dark' : ''}`}>
            £{currentMaxBid}&nbsp;
            <span className="text-count">{numberOfBids ? `(${numberOfBids} bids)` : ''}</span>
          </div>
        </div>
        <div className="row__item live-list__item live-list__item-pl">
          <address>
            {location} <span className="text-count">({locationFar})</span>
          </address>
        </div>
        <div className="row__item live-list__item live-list__item-pl">
          <a href="#" className="time-link">
            <time>{timeToNow}</time>
            <span className="icon-arrow-right pl-4" />
          </a>
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
      <div>
        <LoadMore
          onLoadMore={this.onLoadMore}
          offset={offset}
          limit={limit}
          isShowButton={items.length !== totalNumberOfAuctions}
        >
          <List headers={liveAuctionListHeader} items={items} keyProp="id" renderer={this.getListItem} />
        </LoadMore>
      </div>
    );
  }
}
