import React, { PureComponent } from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { carModels } from '@car-service/redux/selectors/carModels';
import { getCarModelsListRequest } from '@car-service/redux/actions/carModels';
import Image from 'components/common/image';
import CommonCollapse from 'components/carAuctionResults/commonCollapse';

const SHOW_DEFAULT = 12;

class CarMakesModelList extends PureComponent {
  static propTypes = {
    models: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        carModelName: PropTypes.string,
        logo: PropTypes.string,
      }),
    ),
    getModels: PropTypes.func,
    mark: PropTypes.string,
  };

  static defaultProps = {
    models: [],
    mark: '',
    getModels: () => {},
  };

  componentDidMount() {
    const { getModels, mark } = this.props;

    getModels(mark);
  }

  renderItems = ({ logo, mark, carModelName, id }) => (
    <Col lg={2} md={3} sm={4} xs={6} className="box-car" key={id}>
      <Link
        route={{
          pathname: '/car-auctions/car-makes/car-makes-and-model-auctions',
          query: { carMake: mark, carModel: carModelName },
        }}
      >
        <a>
          <div className="img-thumbnail same-height-left">
            <Image src={logo} alt={carModelName} width="110" height="51" />
          </div>
          <h3>{carModelName}</h3>
        </a>
      </Link>
    </Col>
  );

  renderShowElements = () => {
    const { models, mark } = this.props;

    return (
      <Row className="wrap">
        {Array.isArray(models) && models.slice(0, SHOW_DEFAULT).map(item => this.renderItems({ ...item, mark }))}
      </Row>
    );
  };

  render() {
    const { models } = this.props;

    return (
      <div className="review-cars-list">
        <CommonCollapse
          renderAlwaysShowElements={this.renderShowElements}
          isShowReadMore={SHOW_DEFAULT < (Array.isArray(models) && models.length)}
        >
          <Row className="wrap">
            {Array.isArray(models) && models.slice(SHOW_DEFAULT).map(item => this.renderItems(item))}
          </Row>
        </CommonCollapse>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  models: carModels,
});

const mapDispatchToProps = dispatch => ({
  getModels: type => dispatch(getCarModelsListRequest(type)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarMakesModelList);
