import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getAuctionPlaceBidFormProps, getAuctionPlaceBidError } from '@car-service/redux/selectors/auction';

import { placeBidRequest } from '@car-service/redux/actions/auction';

import { modalClose } from '@car-service/redux/actions/modal';

import { CarAuctionPlaceBidForm } from 'components/carAuctionTemplates/carAuctionPlaceBidForm';

const mapStateToProps = createStructuredSelector({
  formData: getAuctionPlaceBidFormProps(),
  error: getAuctionPlaceBidError(),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(placeBidRequest(data)),
  onCancel: data => dispatch(modalClose(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarAuctionPlaceBidForm);
