import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';

import { dropFilters } from '@car-service/redux/actions/auctions';
import CommonCollapse from 'components/carAuctionResults/commonCollapse';

import CarMakeModelItem from 'containers/carMakesAuction/carMakeModelItem';

const DEFAULT_MODELS_IN_LIST = 12;

const CarMakesModelList = ({ models = [], carMake = '', onDropFilters }) => {
  if (models.length === 0) {
    return <div>No models found</div>;
  }

  const shownModels = models.slice(0, DEFAULT_MODELS_IN_LIST);
  const hiddenModels = models.slice(DEFAULT_MODELS_IN_LIST);

  const renderModelList = modelsList => (
    <Row className="wrap">
      {modelsList.map(model => (
        <CarMakeModelItem
          id={model.id}
          logo={model.logo}
          carModelName={model.carModelName}
          carMake={carMake}
          onDropFilters={onDropFilters}
        />
      ))}
    </Row>
  );
  return (
    <div className="review-cars-list">
      <CommonCollapse
        renderAlwaysShowElements={() => renderModelList(shownModels)}
        isShowReadMore={models.length > DEFAULT_MODELS_IN_LIST}
      >
        <Row>{renderModelList(hiddenModels)}</Row>
      </CommonCollapse>
    </div>
  );
};

CarMakesModelList.propTypes = {
  onDropFilters: PropTypes.func,
  carMake: PropTypes.string.isRequired,
  models: PropTypes.arrayOf(
    PropTypes.shape({
      carModelName: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

CarMakesModelList.defaultProps = {
  onDropFilters: null,
};

const mapDispatchToProps = dispatch => ({
  onDropFilters: () => dispatch(dropFilters()),
});

export default connect(
  null,
  mapDispatchToProps,
)(CarMakesModelList);
