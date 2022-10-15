import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const geolocated = ({
  positionOptions = {
    enableHighAccuracy: false,
    maximumAge: 0,
    timeout: Infinity,
  },
  userDecisionTimeout = null,
  suppressLocationOnMount = false,
  watchPosition = false,
  geolocationProvider = typeof navigator !== 'undefined' && navigator.geolocation,
} = {}) => WrappedComponent =>
  class Geolocated extends PureComponent {
    static propTypes = {
      coords: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
        altitude: PropTypes.number,
        accuracy: PropTypes.number,
        altitudeAccuracy: PropTypes.number,
        heading: PropTypes.number,
        speed: PropTypes.number,
      }),
      isGeolocationAvailable: PropTypes.bool,
      isGeolocationEnabled: PropTypes.bool,
      positionError: PropTypes.shape({
        code: PropTypes.oneOf([1, 2, 3]),
        message: PropTypes.string,
      }),
      watchPosition: PropTypes.bool,
    };

    state = {
      coords: null,
      isGeolocationAvailable: Boolean(geolocationProvider),
      isGeolocationEnabled: true,
      positionError: null,
    };

    cancelUserDecisionTimeout = () => {
      if (this.userDecisionTimeoutId) {
        clearTimeout(this.userDecisionTimeoutId);
      }
    };

    onPositionError = positionError => {
      this.cancelUserDecisionTimeout();
      if (this.isCurrentlyMounted) {
        this.setState({
          coords: null,
          isGeolocationEnabled: false,
          positionError,
        });
      }
    };

    onPositionSuccess = position => {
      this.cancelUserDecisionTimeout();
      if (this.isCurrentlyMounted) {
        this.setState({
          coords: position.coords,
          isGeolocationEnabled: true,
          positionError: null,
        });
      }
    };

    getLocation = () => {
      if (!geolocationProvider || !geolocationProvider.getCurrentPosition || !geolocationProvider.watchPosition) {
        throw new Error('The provided geolocation provider is invalid');
      }

      const funcPosition = (watchPosition
        ? geolocationProvider.watchPosition
        : geolocationProvider.getCurrentPosition
      ).bind(geolocationProvider);

      if (userDecisionTimeout) {
        this.userDecisionTimeoutId = setTimeout(() => {
          this.onPositionError();
        }, userDecisionTimeout);
      }

      this.watchId = funcPosition(this.onPositionSuccess, this.onPositionError, positionOptions);
    };

    componentDidMount() {
      this.isCurrentlyMounted = true;
      if (!suppressLocationOnMount) {
        this.getLocation();
      }
    }

    componentWillUnmount() {
      this.isCurrentlyMounted = false;
      this.cancelUserDecisionTimeout();
      if (watchPosition) {
        geolocationProvider.clearWatch(this.watchId);
      }
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} getLocation={this.getLocation} />;
    }
  };

export default geolocated;
