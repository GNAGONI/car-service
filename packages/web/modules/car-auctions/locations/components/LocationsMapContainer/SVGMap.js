import React from 'react';
import PropTypes from 'prop-types';

const SVGMap = ({
  map: { viewBox, locations, label },
  className,
  role,

  locationClassName,
  locationTabIndex,
  locationRole,
  onLocationClick,
  isLocationSelected,
}) => (
  <svg viewBox={viewBox} className={className} role={role} aria-label={label}>
    {locations.map((location, index) => (
      <g onClick={() => onLocationClick(location.name)}>
        <path
          name={location.name}
          id={location.id}
          d={location.path}
          className={typeof locationClassName === 'function' ? locationClassName(location, index) : locationClassName}
          tabIndex={typeof locationTabIndex === 'function' ? locationTabIndex(location, index) : locationTabIndex}
          role={locationRole}
          aria-label={location.name}
          aria-checked={isLocationSelected && isLocationSelected(location, index)}
          key={location.id}
        />
        {location.text && (
          <text x={location.text.x} y={location.text.y} dangerouslySetInnerHTML={{ __html: location.text.content }} />
        )}
      </g>
    ))}
  </svg>
);

SVGMap.propTypes = {
  // Map properties
  map: PropTypes.shape({
    viewBox: PropTypes.string.isRequired,
    locations: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        name: PropTypes.string,
      }),
    ).isRequired,
    label: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  role: PropTypes.string,

  // Locations properties
  locationClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  locationTabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  locationRole: PropTypes.string,
  onLocationClick: PropTypes.func,
  isLocationSelected: PropTypes.func,
};

SVGMap.defaultProps = {
  className: 'svg-map',
  role: 'none', // No role for map
  locationClassName: 'svg-map__location',
};

export default SVGMap;
