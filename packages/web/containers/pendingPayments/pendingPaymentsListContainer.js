import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  getCarsList,
  getCarsListPaging,
  isCarListLoaded,
  carListErrorMessage,
} from '@car-service/redux/selectors/pendingPayments';
import { getPendingPaymentsCarListRequest } from '@car-service/redux/actions/pendingPayments';
import PendingPaymentsList from 'components/pendingPayments/pendingPaymentsList';
import showItemsList from 'components/showItemsList';
import checkApiError from 'components/checkApiError';
import CheckDataError from 'components/checkDataError';

const mapStateToProps = createStructuredSelector({
  items: getCarsList(),
  paging: getCarsListPaging(),
  isLoaded: isCarListLoaded,
  errorMessage: carListErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  getCarList: data => dispatch(getPendingPaymentsCarListRequest(data)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  showItemsList,
  component => checkApiError(component, CheckDataError),
)(PendingPaymentsList);
