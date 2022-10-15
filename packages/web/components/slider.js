import React, { PureComponent } from 'react';
import Slider from 'react-slick-patch';
import PropTypes from 'prop-types';

export const SLIDER_COMMON_RESPONSIVE = [
  {
    breakpoint: 1000,
    settings: {
      slidesToShow: 3,
    },
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      centerMode: true,
      centerPadding: '80px',
    },
  },
];

/* eslint-disable react/prop-types */
const NextArrow = ({ style, onClick }) => (
  <div role="button" tabIndex="-1" className="btn-next" style={{ ...style }} onClick={onClick} onKeyUp={() => {}} />
);

const PrevArrow = ({ style, onClick }) => (
  <div role="button" tabIndex="-1" className="btn-prev" style={{ ...style }} onClick={onClick} onKeyUp={() => {}} />
);
/* eslint-enable react/prop-types */

export default class CommonSlider extends PureComponent {
  static propTypes = {
    slidesToShow: PropTypes.number,
    responsive: PropTypes.arrayOf(
      PropTypes.shape({
        breakpoint: PropTypes.number,
        settings: PropTypes.shape,
      }),
    ),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  };

  static defaultProps = {
    slidesToShow: 3,
    responsive: [],
  };

  render() {
    const { slidesToShow, responsive, children } = this.props;

    return (
      <Slider
        draggable
        slidesToShow={slidesToShow}
        responsive={responsive}
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
        {...this.props}
      >
        {children}
      </Slider>
    );
  }
}
