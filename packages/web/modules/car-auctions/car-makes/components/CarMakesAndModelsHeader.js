import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/common/image';

const CarMakesHeader = ({ logo, subtitle = '', title = '', model = '', priceRange = '£81,852 – £156,381' }) => (
  <section className="content owner-reviews car-auctions content-loader">
    <header className="section-head text-center large">
      <div className="brand-logo">
        <Image src={logo} width="160" height="auto" alt={`${model}-logo`} />
      </div>
      <div className="holder">
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        <div className="text-box">
          <p>{subtitle}</p>
          <strong className="text-big">{priceRange}</strong>
        </div>
      </div>
    </header>
  </section>
);

CarMakesHeader.propTypes = {
  title: PropTypes.string,
  model: PropTypes.string,
  logo: PropTypes.string,
  subtitle: PropTypes.string,
  priceRange: PropTypes.string,
};

export default CarMakesHeader;
