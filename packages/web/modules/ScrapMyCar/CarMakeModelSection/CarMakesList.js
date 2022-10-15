import React from 'react';
import PropTypes from 'prop-types';

const CarMakesList = ({ carMakesListItems }) =>
  carMakesListItems?.length ? (
    <ul className="tick-list three-cols">
      {carMakesListItems.map(({ label, value }) => (
        <li key={`${label}${value}`}>{label}</li>
      ))}
    </ul>
  ) : null;

CarMakesList.propTypes = {
  carMakesListItems: PropTypes.array,
};

CarMakesList.defaultProps = {
  carMakesListItems: [],
};

export default CarMakesList;
