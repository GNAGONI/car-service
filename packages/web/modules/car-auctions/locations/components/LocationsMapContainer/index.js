import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Router } from 'server/pages';
import { Row, Col } from 'react-bootstrap';
import client from '@car-service/api-client';
import { dropFilters } from '@car-service/redux/actions/auctions';

import geolocated from 'components/geolocated';
import Breadcrumbs from 'components/Breadcrumbs';
import mapUK from 'static/json/mapUK';
import { scrollToTop } from 'lib/page';
import LocationsSearch from './LocationsSearch';
import SVGMap from './SVGMap';

const defaultLocations = mapUK.locations.map(({ name }) => ({ name, locationType: 'region' }));

const cityAuctions = '/car-auctions/locations/city-auctions';
const regionAuctions = '/car-auctions/locations/region-auctions';

class Location extends PureComponent {
  static propTypes = {
    coords: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
    isGeolocationAvailable: PropTypes.bool,
    isGeolocationEnabled: PropTypes.bool,
    onDropFilters: PropTypes.func,
    infoBlockTitle: PropTypes.string,
    infoBlockContent1: PropTypes.string,
    infoBlockContent2: PropTypes.string,
    infoBlockContent3: PropTypes.string,
    infoBlockContent4: PropTypes.string,
  };

  static defaultProps = {
    coords: {
      latitude: 0,
      longitude: 0,
    },
    isGeolocationAvailable: false,
    isGeolocationEnabled: false,
    onDropFilters: () => {},
  };

  state = {
    locations: [],
  };

  componentDidMount() {
    this.setState({ locations: defaultLocations });
  }

  renderLocationOption = ({ id, name, locationType }) => {
    const href =
      locationType === 'region'
        ? { pathname: regionAuctions, query: { region: name } }
        : { pathname: cityAuctions, query: { location: name } };
    const { onDropFilters } = this.props;

    return (
      <li key={id || name} onClick={onDropFilters}>
        <Link route={href}>
          <a>{name}</a>
        </Link>
      </li>
    );
  };

  handleMapLocationClick = locationName => {
    const { onDropFilters } = this.props;

    onDropFilters();
    Router.pushRoute(regionAuctions, { region: locationName }).then(() => scrollToTop());
  };

  getCurrentLocation = async () => {
    let locations = [];
    try {
      const { coords, isGeolocationAvailable, isGeolocationEnabled } = this.props;
      if (!coords || !isGeolocationAvailable || !isGeolocationEnabled) {
        return;
      }
      locations = await client.locations.search({ lat: coords.latitude, lng: coords.longitude });
    } catch (e) {
      console.log(e);
    }
    this.setState({ locations });
  };

  searchLocation = async ({ location }) => {
    let locations = [];
    try {
      locations = await client.locations.search({ search: location });
    } catch (e) {
      console.log(e);
    }
    this.setState({ locations });
  };

  render() {
    const { locations } = this.state;
    const { infoBlockTitle, infoBlockContent1, infoBlockContent2, infoBlockContent3, infoBlockContent4 } = this.props;

    return (
      <section className="content location-finder bg-before-info extend">
        <Row>
          <Col md={6} lg={5} className="content-block pt-3">
            <Breadcrumbs />
            <div className="content-area">
              <header className="section-head">
                <h2 dangerouslySetInnerHTML={{ __html: infoBlockTitle }} />
              </header>
              <div className="text-holder">
                <p dangerouslySetInnerHTML={{ __html: infoBlockContent1 }} />
              </div>
              <div className="form-location">
                <h4 dangerouslySetInnerHTML={{ __html: infoBlockContent3 }} />
                <LocationsSearch getCurrentLocation={this.getCurrentLocation} searchLocation={this.searchLocation} />
              </div>
              <div className="info-area">
                <div className="text-holder">
                  <p>
                    <strong dangerouslySetInnerHTML={{ __html: infoBlockContent2 }} />
                  </p>
                </div>
                <div className="region-heading d-none d-md-flex">
                  <i className="icon-pointer" />
                  <strong className="text" dangerouslySetInnerHTML={{ __html: infoBlockContent4 }} />
                </div>
              </div>
              <ul className="nav nav-tabs d-md-none">
                <li className="active">
                  <a id="list-tab" href="#list-view">
                    List view
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#map-view">Map view</a>
                </li>
              </ul>

              <div className="tab" id="list-view">
                <ul className="tick-list two-cols">{locations?.map(this.renderLocationOption)}</ul>
              </div>
            </div>
          </Col>

          <Col md={6} className="content-block tab justify-content-center bg-before-default offset-lg-1" id="map-view">
            <SVGMap map={mapUK} onLocationClick={this.handleMapLocationClick} />
          </Col>
        </Row>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onDropFilters: () => dispatch(dropFilters()),
});

export default connect(
  null,
  mapDispatchToProps,
)(geolocated()(Location));
