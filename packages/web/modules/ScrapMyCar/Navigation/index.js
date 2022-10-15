import React from 'react';
import Subnav from 'components/subnav';

const subnavItems = {
  scrapMyCar: [
    {
      label: 'Scrap my car',
      link: '/scrap-my-car',
      value: '',
    },
    // {
    //   label: 'How it works',
    //   link: '/how-it-works',
    //   value: 'how-it-works',
    // },
    // {
    //   label: 'About',
    //   link: '/about',
    //   value: 'about',
    // },
    // {
    //   label: 'Contact',
    //   link: '/contact',
    //   value: 'contact',
    // },
    // TODO when relevant components will be done
  ],
};

const Navigation = () => <Subnav subnavItems={subnavItems} />;

export default Navigation;
