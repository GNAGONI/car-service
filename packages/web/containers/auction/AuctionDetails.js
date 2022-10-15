import { withRouter } from 'next/router';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getAuctionData } from '@car-service/redux/selectors/auction';
import {
  getAuctionRequest,
  updateTimeRemaining,
  watchAuctionProgress,
  watchAuctionFinish,
} from '@car-service/redux/actions/auction';
import AuctionDetails from 'components/carAuctionTemplates/auctionDetails';

const mapStateToProps = createStructuredSelector({
  car: getAuctionData(),
});

const mapDispatchToProps = dispatch => ({
  getAuctionDetail: data => dispatch(getAuctionRequest(data)),
  updateTimeRemaining: time => dispatch(updateTimeRemaining(time)),
  startWatchingAction: id => dispatch(watchAuctionProgress(id)),
  stopWatchingAction: id => dispatch(watchAuctionFinish(id)),
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(AuctionDetails);
