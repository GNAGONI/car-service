import React from 'react';
import Subnav from 'components/subnav';

const subnavItems = {
  'my-account': [
    {
      label: 'Live auctions',
      link: '/my-account/live-auctions',
      value: 'live-auctions',
    },
    {
      label: 'Pending payments',
      link: '/my-account/pending-payments',
      value: 'pending-payments',
    },
    {
      label: 'Awaiting collection',
      link: '/my-account/awaiting-collection',
      value: 'awaiting-collection',
    },
    {
      label: 'Collected vehicles',
      link: '/my-account/collected-vehicles',
      value: 'collected-vehicles',
    },
    {
      label: 'Quotes archive',
      link: '/my-account/quotes-archive',
      value: 'quotes-archive',
    },
  ],
};

const CarAuctionsSubnav = () => <Subnav subnavItems={subnavItems} />;

export default CarAuctionsSubnav;
