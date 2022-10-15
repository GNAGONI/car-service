import { auction7 } from 'static/images';

export const auctionImages = [auction7, auction7, auction7, auction7, auction7];

export const carDetails = {
  productionYear: '2010',
  colour: 'Silver',
  fuelType: 'Petrol',
  mileage: '77,987',
  transmission: 'Manual',
  hasKeys: 'Has keys',
  doesStart: 'Does start',
  v5cLogbook: 'No V5',
  AbiCategory: 'ABI category not recorded',
  FSH: 'No FSH',
};

export const detailDescription = {
  bodyworkCondition: 'Excellent',
  interiorCondition: 'Excellent',
  exterior: 'Alloy Wheels, Rear Spoiler, Tuning',
  interior:
    'Air Conditioning, Auxiliary Heating, Climate Control, Cruise Control, Power-assisted Steering (PAS), Power Locks, Power Windows, Tilt Steering Wheel',
  safetyFeatures:
    'Anti-lock Brakes (ABS), Driver Airbag, Immobiliser, Passenger Airbag, Rear Seat Belts, Safety Belt Pretensioners, Side Airbags',
};

export const auctionBidding = {
  name: 'preferredCollectionTime',
  currentBid: 160,
  numberOfBids: 2,
  timeRemaining: new Date().getTime() + 23 * 60 * 60 * 1000 - new Date(),
  distance: {
    postcode: 'PR1',
    distance: '2 miles',
  },
  preferredCollectionTime: [
    {
      date: '22 June 2018',
      startTime: '09:00am',
      endTime: '12:00pm',
    },
    {
      date: '23 June 2018',
      startTime: '09:00am',
      endTime: '12:00pm',
    },
    {
      date: '24 June 2018',
      startTime: '09:00am',
      endTime: '12:00pm',
    },
  ],
  closingTime: 1572451015,
};

export const reviews = [
  {
    id: 1,
    name: 'Joe Blogg',
    location: 'Essex',
    rating: 4.5,
    review:
      'Car.service was fantastic in lorem ipsum dolor sit amet, consecte adipiscing elit, diam non my nibh euismod tin unt ut adipiscing elit volutpat.',
  },
  {
    id: 2,
    name: 'Joe Blogg',
    location: 'Essex',
    rating: 3.5,
    review:
      'Car.service was fantastic in lorem ipsum dolor sit amet, consecte adipiscing elit, diam non my nibh euismod tin unt ut adipiscing elit volutpat.',
  },
  {
    id: 3,
    name: 'Joe Blogg',
    location: 'Essex',
    rating: 5,
    review:
      'Car.service was fantastic in lorem ipsum dolor sit amet, consecte adipiscing elit, diam non my nibh euismod tin unt ut adipiscing elit volutpat.',
  },
  {
    id: 3,
    name: 'Joe Blogg',
    location: 'Essex',
    rating: 2.5,
    review:
      'Car.service was fantastic in lorem ipsum dolor sit amet, consecte adipiscing elit, diam non my nibh euismod tin unt ut adipiscing elit volutpat.',
  },
  {
    id: 4,
    name: 'Joe Blogg',
    location: 'Essex',
    rating: 2,
    review:
      'Car.service was fantastic in lorem ipsum dolor sit amet, consecte adipiscing elit, diam non my nibh euismod tin unt ut adipiscing elit volutpat.',
  },
  {
    id: 5,
    name: 'Joe Blogg',
    location: 'Essex',
    rating: 4,
    review:
      'Car.service was fantastic in lorem ipsum dolor sit amet, consecte adipiscing elit, diam non my nibh euismod tin unt ut adipiscing elit volutpat.',
  },
];
