import { createSelector, createStructuredSelector } from 'reselect';

const getAuction = state => state.auction;
const getPlaceBidWasPlaced = state => state.auction.auctionPlaceBidWasPlaced;

export const getAuctionData = () =>
  createSelector(
    getAuction,
    auction => auction.auctionData,
  );

export const getAuctionPlaceBidFormProps = () =>
  createSelector(
    getAuction,
    ({ auctionData }) => {
      const { name, bidsCount, timeRemaining, lastBids: { global: currentBid, signedIn: currentUserBid } = {} } =
        auctionData || {};

      return {
        name,
        bidsCount,
        timeRemaining,
        currentBid,
        currentUserBid,
      };
    },
  );

export const getAuctionPlaceBidError = () =>
  createSelector(
    getAuction,
    ({ auctionPlaceBidError }) => auctionPlaceBidError?.error?.messages.common,
  );

export const getAuctionId = () =>
  createSelector(
    getAuction,
    ({ auctionData }) => auctionData.id,
  );

export const getAuctionPlaceBidWasPlaced = createStructuredSelector({
  isPlaced: getPlaceBidWasPlaced,
});

export const getCarMark = () =>
  createSelector(
    getAuction,
    ({ auctionData }) => auctionData && auctionData.name && auctionData.name.split(' ')[1],
  );

export const getCarModel = () =>
  createSelector(
    getAuction,
    ({ auctionData }) => auctionData && auctionData.name && auctionData.name.split(' ')[2],
  );
