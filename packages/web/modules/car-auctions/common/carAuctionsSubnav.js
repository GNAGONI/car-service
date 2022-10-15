import React from 'react';
import Subnav from 'components/subnav';

const subnavItems = {
  'car-auctions': [
    {
      label: 'Car auctions',
      link: '/car-auctions',
      value: '',
    },
    {
      label: 'Auction your car',
      link: '/car-auctions/auction-your-car',
      value: 'auction-your-car',
    },
    {
      label: 'Vehicle types',
      link: '/car-auctions/vehicle-types',
      value: 'vehicle-types',
    },
    {
      label: 'Car makes',
      link: '/car-auctions/car-makes',
      value: 'car-makes',
    },
    {
      label: 'Locations',
      link: '/car-auctions/locations',
      value: 'locations',
    },
    {
      label: 'How it works',
      link: '/car-auctions/how-it-works',
      value: 'how-it-works',
    },
    {
      label: 'FAQs',
      link: '/car-auctions/faqs',
      value: 'faqs',
    },
    {
      label: 'About',
      link: '/car-auctions/about',
      value: 'about',
    },
    {
      label: 'Contact',
      link: '/car-auctions/contact',
      value: 'contact',
    },
  ],
};

const CarAuctionsSubnav = () => <Subnav subnavItems={subnavItems} />;

export default CarAuctionsSubnav;
