import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  getCarsList,
  getCarsListPaging,
  isCarListLoaded,
  carListErrorMessage,
} from '@car-service/redux/selectors/awaitingCollection';
import { getAwaitingCollectionCarListRequest } from '@car-service/redux/actions/awaitingCollection';
import AwaitingCollectionList from 'modules/User/MyAccount/awaiting-collection/components/AwaitingCollectionList';
import CheckDataError from 'components/checkDataError';
import showItemsList from 'components/showItemsList';
import checkApiError from 'components/checkApiError';

const mapStateToProps = createStructuredSelector({
  items: getCarsList(),
  paging: getCarsListPaging(),
  isLoaded: isCarListLoaded,
  errorMessage: carListErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  getCarList: data => dispatch(getAwaitingCollectionCarListRequest(data)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  showItemsList,
  component => checkApiError(component, CheckDataError),
)(AwaitingCollectionList);
