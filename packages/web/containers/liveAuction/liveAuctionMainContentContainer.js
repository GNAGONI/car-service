import { createStructuredSelector } from 'reselect';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getIsCarsListLoading } from '@car-service/redux/selectors/liveAuction';

import { setLiveAuctionCarListFilter, resetLiveAuctionCarList } from '@car-service/redux/actions/liveAuction';

import LiveAuctionMainContent from 'components/liveAuction/liveAuctionMainContent';

const mapStateToProps = createStructuredSelector({
  isCarsListLoading: getIsCarsListLoading(),
});

const mapDispatchToProps = dispatch => ({
  setCarListFilter: data => dispatch(setLiveAuctionCarListFilter(data)),
  resetCarsList: data => dispatch(resetLiveAuctionCarList(data)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
)(LiveAuctionMainContent);
