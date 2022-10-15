import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  getCarsList,
  getCarsListPaging,
  getCarsListFilter,
  isCarListLoaded,
  carListErrorMessage,
} from '@car-service/redux/selectors/liveAuction';
import { getLiveAuctionCarListRequest } from '@car-service/redux/actions/liveAuction';
import LiveAuctionList from 'components/liveAuction/liveAuctionList';
import showItemsList from 'components/showItemsList';
import checkApiError from 'components/checkApiError';
import CheckDataError from 'components/checkDataError';

const mapStateToProps = createStructuredSelector({
  items: getCarsList(),
  paging: getCarsListPaging(),
  filter: getCarsListFilter(),
  isLoaded: isCarListLoaded,
  errorMessage: carListErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  getCarList: data => dispatch(getLiveAuctionCarListRequest(data)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  showItemsList,
  component => checkApiError(component, CheckDataError),
)(LiveAuctionList);
