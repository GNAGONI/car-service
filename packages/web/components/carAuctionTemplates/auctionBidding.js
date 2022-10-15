import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';

import { iconLocation, iconClockTimeRemaining } from 'static/images/icons';
import { isUserAuthenticatedSelector } from '@car-service/redux/selectors/userAuth';
import { modalOpen } from '@car-service/redux/actions/modal';
import Countdown from 'components/countdown';
import { MODAL_TYPE } from 'containers/rootModalContainer';
import { createStructuredSelector } from 'reselect';
import PreferredCollectionTime from '../PreferredCollectionTime';

const AuctionBidding = ({
  carDetails: { productionYear, carMake, carModel },
  currentBid,
  numberOfBids,
  timeRemaining,
  preferredCollectionTime,
  collectionPostcode,
  distance,
  disableEdit,
  currentUserBid,
  isUserAuthenticated,
  openModal,
}) => {
  const onPlaceBid = () => {
    openModal({ modalType: isUserAuthenticated ? MODAL_TYPE.placeBids : MODAL_TYPE.login });
  };

  const auctionName = `${productionYear} ${carMake} ${carModel}`;

  return (
    <div className="banner-col">
      <div className="header">
        <h2>{auctionName}</h2>
        <strong className="bid-wrap">
          Current Bid: <span className="price">£{currentBid}</span> ({numberOfBids} {numberOfBids > 1 ? 'bids' : 'bid'})
        </strong>
      </div>
      <ul className="meta-list">
        <li>
          <i>
            <img src={iconClockTimeRemaining} height="20px" width="20px" alt="Clock" />
          </i>
          Time remaining:{' '}
          <span className="meta-text">
            {timeRemaining ? <Countdown timeRemaining={timeRemaining} /> : 'Auction Ended'}
          </span>
        </li>
        <li>
          <i>
            <img src={iconLocation} height="20px" width="20px" alt="Location" />
          </i>
          Collection postcode: {collectionPostcode}
          <span className="meta-text">({distance} miles away)</span>
        </li>
      </ul>

      {!disableEdit && (
        <div className="time-option-block">
          <div>
            <p>Preferred collection time:</p>
            <PreferredCollectionTime preferredCollectionTime={preferredCollectionTime} />
          </div>
          {!!timeRemaining && (
            <>
              <Row className="mt-3">
                <Col>
                  <Button variant="primary" size="xl" onClick={onPlaceBid}>
                    {currentUserBid ? 'Increase your max bid' : 'Place bid '}
                  </Button>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <Button variant="info" size="lg">
                    <i className="icon-eye" />
                    Watch this car
                  </Button>
                </Col>
                <Col>
                  <Button variant="info" size="lg">
                    <i className="icon-message" />
                    Message seller
                  </Button>
                </Col>
              </Row>
            </>
          )}
        </div>
      )}
    </div>
  );
};

AuctionBidding.propTypes = {
  currentBid: PropTypes.number,
  currentUserBid: PropTypes.number,
  numberOfBids: PropTypes.number,
  timeRemaining: PropTypes.number,
  preferredCollectionTime: PropTypes.arrayOf(PropTypes.number),
  collectionPostcode: PropTypes.string,
  distance: PropTypes.number,
  carDetails: PropTypes.shape({
    productionYear: PropTypes.number.isRequired,
    carMake: PropTypes.string,
    carModel: PropTypes.string,
  }),
  disableEdit: PropTypes.bool,
  openModal: PropTypes.func.isRequired,
  isUserAuthenticated: PropTypes.bool.isRequired,
};

AuctionBidding.defaultProps = {
  currentBid: 0,
  currentUserBid: 0,
  numberOfBids: 0,
  preferredCollectionTime: [],
  distance: 0,
  collectionPostcode: '',
  carDetails: {
    productionYear: 0,
    carMake: '',
    carModel: '',
  },
  disableEdit: false,
};

const mapStateToProps = createStructuredSelector({
  isUserAuthenticated: isUserAuthenticatedSelector,
});

const mapDispatchToProps = dispatch => ({
  openModal: data => dispatch(modalOpen(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuctionBidding);
