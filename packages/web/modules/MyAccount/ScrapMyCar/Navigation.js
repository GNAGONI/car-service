import React from 'react';
import Subnav from 'components/subnav';

const subnavItems = {
  scrapMyCar: [
    {
      label: 'Quote history',
      link: '/my-account/scrap-my-car/quote-history',
      value: 'quoteHistory',
    },
    {
      label: 'Scrapped cars',
      link: '/my-account/scrap-my-car/scrapped-cars',
      value: 'scrappedCars',
    },
  ],
};

const Navigation = () => <Subnav subnavItems={subnavItems} levelCount="3" />;

export default Navigation;
