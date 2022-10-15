import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import AuctionCarousel from 'components/carAuctionTemplates/auctionCarousel';
import AuctionBidding from 'components/carAuctionTemplates/auctionBidding';
import CustomerDescription from 'components/carAuctionTemplates/customerDescription';
import CarDetails from 'components/carAuctionTemplates/carDetails';
import DetailDescription from 'components/carAuctionTemplates/detailDescription';
import Image from 'components/common/image';

export default class AuctionDetails extends PureComponent {
  static propTypes = {
    car: PropTypes.shape({
      images: PropTypes.arrayOf(
        PropTypes.shape({
          min: PropTypes.string,
          mid: PropTypes.string,
          large: PropTypes.string,
        }),
      ),
      bidsCount: PropTypes.number,
      id: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.string,
      status: PropTypes.string,
      markedAsScrap: PropTypes.bool,
      featured: PropTypes.bool,
      collectionPostcode: PropTypes.string,
      distance: PropTypes.number,
      timeRemaining: PropTypes.number,
      preferredCollectionTime: PropTypes.arrayOf(PropTypes.number),
      customerDescription: PropTypes.string,
      lastBids: PropTypes.shape({
        global: PropTypes.number,
        signedIn: PropTypes.number,
      }),
      carDetails: PropTypes.shape({
        productionYear: PropTypes.number,
        colour: PropTypes.string,
        fuelType: PropTypes.string,
        mileage: PropTypes.number,
        transmission: PropTypes.string,
        hasKeys: PropTypes.bool,
        doesStart: PropTypes.bool,
        V5CLogbook: PropTypes.bool,
        ABICategoryRecorded: PropTypes.bool,
        FSH: PropTypes.number,
      }),
      details: PropTypes.shape({
        bodyworkCondition: PropTypes.string,
        interiorCondition: PropTypes.string,
        exterior: PropTypes.arrayOf(PropTypes.string),
        interior: PropTypes.arrayOf(PropTypes.string),
        safety: PropTypes.arrayOf(PropTypes.string),
      }),
    }),
    router: PropTypes.shape({
      query: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    }),
    getAuctionDetail: PropTypes.func,
    onPlaceBid: PropTypes.func,
    startWatchingAction: PropTypes.func.isRequired,
    stopWatchingAction: PropTypes.func.isRequired,
    updateTimeRemaining: PropTypes.func,
    disableEdit: PropTypes.bool,
  };

  static defaultProps = {
    car: {},
    router: {
      query: {
        id: '',
      },
    },
    disableEdit: false,
    getAuctionDetail: () => {},
    updateTimeRemaining: () => {},
  };

  componentDidMount() {
    const {
      getAuctionDetail,
      startWatchingAction,
      router: {
        query: { id },
      },
    } = this.props;

    getAuctionDetail({ id });
    startWatchingAction(id);
  }

  componentWillUnmount() {
    this.props.stopWatchingAction();
  }

  updateTimeRemaining = timeRemaining => {
    this.props.updateTimeRemaining(timeRemaining);
  };

  render() {
    const { car, disableEdit } = this.props;
    const {
      images = [],
      timeRemaining,
      customerDescription,
      preferredCollectionTime,
      carDetails,
      details = {},
      distance,
      bidsCount,
      lastBids,
      collectionPostcode,
    } = car;
    const { bodyworkCondition, exterior, interior, interiorCondition, safety } = details;

    return (
      <article className="content auction-details extend bg-before-default">
        <div className="detail-banner auction-slider">
          {Array.isArray(images) && images.length ? (
            <AuctionCarousel images={images.map(item => item.large)} isMarkedAsScrap />
          ) : (
            <Image alt="detail banner" />
          )}

          <AuctionBidding
            carDetails={carDetails}
            currentBid={lastBids?.global || 0}
            currentUserBid={lastBids?.signedIn || 0}
            numberOfBids={bidsCount}
            distance={distance}
            collectionPostcode={collectionPostcode}
            preferredCollectionTime={preferredCollectionTime}
            timeRemaining={timeRemaining}
            updateTimeRemaining={this.updateTimeRemaining}
            disableEdit={disableEdit}
          />
        </div>

        <CustomerDescription text={customerDescription} />

        <CarDetails {...carDetails} />

        <DetailDescription
          bodyworkCondition={bodyworkCondition}
          interiorCondition={interiorCondition}
          exterior={exterior}
          interior={interior}
          safetyFeatures={safety}
        />
      </article>
    );
  }
}
