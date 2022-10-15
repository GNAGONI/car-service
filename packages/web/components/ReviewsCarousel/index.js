import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick-patch';

import ReviewsCarouselHead from './ReviewsCarouselHead';
import ReviewsCarouselArrow from './ReviewsCarouselArrow';
import ReviewItem from '../ReviewItem';

const defaultReviewsCarouselItems = [
  {
    text:
      'I didn’t know where to start when it came to scrapping my car. I can’t thank you enough for all your support.',
    fullName: 'Tim Francis',
    location: 'Glasgow',
    rating: 4,
  },
  {
    text:
      'The gentleman who collected my car was very friendly and courteous. I really appreciated his help with the paperwork.',
    fullName: 'Yvonne Thomson',
    location: 'York',
    rating: 4.5,
  },
  {
    text: 'Your collection service was a real bonus! I had no idea how to deliver my car, so you saved me a headache!',
    fullName: 'Pete Fox',
    location: 'Croydon',
    rating: 5,
  },
  {
    text:
      'I’d put aside a full day to arrange to scrap my car. You got the whole process wrapped up in 10 minutes! Fantastic.',
    fullName: 'Laura Mitchell',
    location: 'Portsmouth',
    rating: 4.5,
  },
  {
    text:
      'We were genuinely surprised by the price you found for us. You put us in touch with a specialist dismantler we didn’t even know existed.',
    fullName: 'Asim Suleman',
    location: 'Leeds',
    rating: 4.5,
  },
  {
    text:
      'I hate haggling, so I was worried about calling scrap yards. It was such a relief to know you find the best prices straight away.',
    fullName: 'Lucy Baxter',
    location: 'Sutton Coldfield',
    rating: 4,
  },
  {
    text:
      'A couple of friends scrapped cars using Car.service, so I followed their advice and did the same! I’m glad I did; you got me a brilliant price.',
    fullName: 'David Holloway',
    location: 'Ipswich',
    rating: 4,
  },
  {
    text:
      'You found our quote on Tuesday, and the car was on the back of the recovery truck by Thursday morning. Super service.',
    fullName: 'Helen Cartwright',
    location: 'Barmouth',
    rating: 5,
  },
  {
    text:
      'A big thank you for all the help and guidance you provided when we scrapped our Focus. It was really appreciated.',
    fullName: 'Matt Simpson',
    location: 'Southend',
    rating: 5,
  },
  {
    text:
      'I’d heard horror stories about rogue traders scrapping cars for cash – so I felt much safer using your reputable service. Thank you.',
    fullName: 'Dean Richardson',
    location: 'Taunton',
    rating: 5,
  },
  {
    text:
      'The car hadn’t moved for a couple of years, but the recovery driver you sent managed to get it picked up in no time. Many thanks!',
    fullName: 'Chris Limond',
    location: 'South Shields',
    rating: 4,
  },
  {
    text:
      'It’s great to know my car will help to fund charity work. The price you got for me was just the icing on the cake!',
    fullName: 'Jane Pratt',
    location: 'Stoke',
    rating: 4.5,
  },
];

const settings = {
  className: 'content-holder',
  rowclassName: 'container reviews-row',
  centerPadding: '60px',
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  slidesPerRow: 2,
  rows: 2,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesPerRow: 1,
        rows: 1,
      },
    },
  ],
};

const REVIEWS_CAROUSEL_HEADER_LABEL = 'What do <strong>customers say</strong> about Car.service?';
const REVIEWS_CAROUSEL_HEADER_MESSAGE =
  'We’ve helped thousands of people scrap their vehicles quickly and simply – but what do they think of the service they received?';

const ReviewsCarousel = ({ reviewsCarouselItems }) =>
  reviewsCarouselItems ? (
    <section className="content section-testimonials bg-before-default reviews-slider-section">
      <ReviewsCarouselHead
        reviewsCarouselHeaderLabel={REVIEWS_CAROUSEL_HEADER_LABEL}
        reviewsCarouselHeaderMessage={REVIEWS_CAROUSEL_HEADER_MESSAGE}
      />
      <Slider
        {...settings}
        prevArrow={<ReviewsCarouselArrow type="prev" />}
        nextArrow={<ReviewsCarouselArrow type="next" />}
      >
        {reviewsCarouselItems.map(item => (
          <ReviewItem key={`${item.fullName}-${item.location}`} {...item} />
        ))}
      </Slider>
    </section>
  ) : null;

ReviewsCarousel.propTypes = {
  reviewsCarouselItems: PropTypes.array,
};

ReviewsCarousel.defaultProps = {
  reviewsCarouselItems: defaultReviewsCarouselItems,
};

export default ReviewsCarousel;
