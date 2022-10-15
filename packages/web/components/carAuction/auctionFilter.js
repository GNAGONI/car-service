import React from 'react';

import FilterBox from 'components/carAuction/filterBox';
import {
  auction1,
  auction12x,
  auction1Mobile,
  auction1Mobile2x,
  auction2,
  auction22x,
  auction2Mobile,
  auction2Mobile2x,
  auction3,
  auction32x,
  auction3Mobile,
  auction3Mobile2x,
} from 'static/images';

const filterTypes = [
  {
    mobileImage: auction1,
    mobile2xImage: auction12x,
    normalImage: auction1Mobile,
    normal2xImage: auction1Mobile2x,
    browseBy: 'make & model',
    link: '/car-auctions/car-makes',
  },
  {
    mobileImage: auction2,
    mobile2xImage: auction22x,
    normalImage: auction2Mobile,
    normal2xImage: auction2Mobile2x,
    browseBy: 'location',
    link: '/car-auctions/locations',
  },
  {
    mobileImage: auction3,
    mobile2xImage: auction32x,
    normalImage: auction3Mobile,
    normal2xImage: auction3Mobile2x,
    browseBy: 'vehicle type',
    link: '/car-auctions/vehicle-types',
  },
];

export default () => (
  <section className="auction-filters content bg-expansion">
    <div className="content-holder">
      <div className="container">
        <div className="row wrap auction-filters-slider">
          {filterTypes.map(({ mobileImage, mobile2xImage, normalImage, normal2xImage, browseBy, link }) => (
            <FilterBox
              mobileImage={mobileImage}
              mobile2xImage={mobile2xImage}
              normalImage={normalImage}
              normal2xImage={normal2xImage}
              browseBy={browseBy}
              link={link}
              key={`${mobileImage}_${mobile2xImage}_${link}`}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);
