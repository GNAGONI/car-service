import React from 'react';
import PropTypes from 'prop-types';

const TypesOfCars = ({ title, text, carTypesItems }) => (
  <section className="widget widget-cars bg-dark text-default">
    <span className="bg-tiers"></span>
    <header className="widget-head">
      {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
      {text && <p dangerouslySetInnerHTML={{ __html: text }} />}
    </header>
    {carTypesItems?.length ? (
      <ul className="tick-list">
        {carTypesItems.map(({ label, value }) => (
          <li key={`${label}${value}`}>{label}</li>
        ))}
      </ul>
    ) : null}
  </section>
);

TypesOfCars.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  carTypesItems: PropTypes.array,
};

TypesOfCars.defaultProps = {
  title: '',
  text: '',
  carTypesItems: '',
};

export default TypesOfCars;
