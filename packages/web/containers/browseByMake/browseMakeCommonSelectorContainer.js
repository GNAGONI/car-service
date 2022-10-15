import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { browseByMakeOptionList } from '@car-service/redux/selectors/browseByMake';
import CommonSelector from 'components/commonSelector/commonSelector';
import { dropFilters } from '@car-service/redux/actions/auctions';

const mapStateToProps = createStructuredSelector({
  options: browseByMakeOptionList,
});

const mapDispatchToProps = dispatch => ({
  onDropFilters: () => dispatch(dropFilters()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommonSelector);
