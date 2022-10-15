import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'server/pages';
import { Row, Col, Container } from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { browseByMakeData } from '@car-service/redux/selectors/browseByMake';
import { getBrowseByMakeAuctionsRequest } from '@car-service/redux/actions/browseByMake';
import { dropFilters } from '@car-service/redux/actions/auctions';

import Image from 'components/common/image';

class BrowseByMakeContent extends PureComponent {
  static propTypes = {
    getBrowByMakeList: PropTypes.func,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        carMakeName: PropTypes.string,
        logo: PropTypes.shape({ logo: PropTypes.string }),
      }),
    ),
    onDropFilters: PropTypes.func,
  };

  static defaultProps = {
    getBrowByMakeList: () => {},
    list: [],
    onDropFilters: () => {},
  };

  componentDidMount() {
    this.props.getBrowByMakeList();
  }

  renderItem = ({ id, carMakeName, logo }) => {
    const { onDropFilters } = this.props;

    return (
      <li key={id} onClick={onDropFilters}>
        <Link route={{ pathname: '/car-auctions/car-makes/car-makes-auctions', query: { carMake: carMakeName } }}>
          <a>
            <div className="img-thumbnail">
              <Image src={logo} alt={carMakeName} width="245" height="80" />
            </div>
            <h3>{carMakeName}</h3>
          </a>
        </Link>
      </li>
    );
  };

  render() {
    const { list } = this.props;

    return (
      <Container className="car-by-make">
        <Row>
          <Col>
            <div className="content-holder bg-before-default mt-4 mb-4">
              <ul className="car-makes">{Array.isArray(list) && list && list.map(this.renderItem)}</ul>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  list: browseByMakeData,
});

const mapDispatchToProps = dispatch => ({
  getBrowByMakeList: () => dispatch(getBrowseByMakeAuctionsRequest()),
  onDropFilters: () => dispatch(dropFilters()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BrowseByMakeContent);
