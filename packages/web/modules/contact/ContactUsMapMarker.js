import React from 'react';

import { mapMarker, mapMarker2x } from 'static/images';

const ContactUsMapMarker = () => (
  <picture className="map-marker">
    <source srcSet={`${mapMarker}, ${mapMarker2x} 2x`} />
    <img src={mapMarker} alt="marker" />
  </picture>
);

export default ContactUsMapMarker;
