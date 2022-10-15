import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/common/image';
import CarMakeModelList from 'containers/carMakesAuction/carMakeModelList';

const CarMakesHeader = ({ carMake, logo, models, subtitle, title }) => (
  <section className="content owner-reviews car-auctions content-loader">
    <header className="section-head text-center large">
      <div className="brand-logo">
        <Image src={logo} width="160" height="auto" alt={`${carMake}-logo`} />
      </div>
      <div className="holder">
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        <div className="text-box">
          <div dangerouslySetInnerHTML={{ __html: subtitle }} />
          <strong className="text-big">£81,852 – £156,381</strong>
        </div>
      </div>
    </header>
    <CarMakeModelList models={models} carMake={carMake} />
  </section>
);

CarMakesHeader.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
  subtitle: PropTypes.string,
  carMake: PropTypes.string,
  models: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      carModelName: PropTypes.string,
      logo: PropTypes.string,
    }),
  ),
};

CarMakesHeader.defaultProps = {
  subtitle: '',
  logo: '',
  title: '',
  carMake: '',
  models: [],
};

export default CarMakesHeader;
