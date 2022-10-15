import { iconFinance, iconMap, iconInstant, iconMoney, iconPaperwork } from 'static/images/icons';

export const arrangeCollection = {
  title: 'We can collect your car <br/> for free and give you',
};
export const vehicleDetails = {
  title: 'Vehicle details',
};
export const customerReview = {
  title: ` <strong>1000's</strong> of happy customers`,
  text: `Car.service gave me the best price for my car, provided a free collection service and picked it up within 48 hours. Amazing service!`,
  fullName: 'Tom Stephenson',
  location: 'Manchester',
  rating: 5,
};

export const scrapClarification = {
  title: '<strong>The best price for your scrap car</strong>',
  text:
    'As well as providing an outstanding price for your vehicle, we’ll make sure you’re supported\n' +
    'to tie-up every part of the process – even finalising your official paperwork.',
  clarificationItems: [
    {
      title: 'Best prices <br /> for your car',
      icon: iconFinance,
    },
    {
      title: 'Free nationwide <br /> collection',
      icon: iconMap,
    },
    {
      title: 'Instant price <br /> online',
      icon: iconInstant,
    },
    {
      title: 'Quick <br /> payment',
      icon: iconMoney,
    },
    {
      title: 'Official paperwork <br /> sorted',
      icon: iconPaperwork,
    },
  ],
};
