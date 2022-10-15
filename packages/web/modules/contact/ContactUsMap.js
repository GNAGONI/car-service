import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import ContactUsMapMarker from './ContactUsMapMarker';

const ContactUsMap = ({ zoom, center, height, width, children }) => (
  // Important! Always set the container height explicitly
  <div style={{ height, width }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
      defaultCenter={center}
      defaultZoom={zoom}
    >
      {children(center)}
    </GoogleMapReact>
  </div>
);

ContactUsMap.Marker = ContactUsMapMarker;

ContactUsMap.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  zoom: PropTypes.number,
  height: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.func,
};

ContactUsMap.defaultProps = {
  center: {
    lat: 51.64711,
    lng: -4.035767,
  },
  zoom: 12,
  height: '553px',
  width: '100%',
};

export default ContactUsMap;
