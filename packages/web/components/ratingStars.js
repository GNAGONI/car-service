import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import { star as star1, starO, starHalfO } from 'react-icons-kit/fa';

export default class extends PureComponent {
  static propTypes = {
    rating: PropTypes.number.isRequired,
    maxRating: PropTypes.number,
  };

  static defaultProps = {
    maxRating: 5,
  };

  getStar = index => (
    <li key={index}>
      <span>
        <Icon icon={this.getStarStatus(index)} />
      </span>
    </li>
  );

  getStarStatus = index => {
    if (index >= 0) {
      return star1;
    }
    if (index >= -0.75) {
      return starHalfO;
    }
    return starO;
  };

  renderStars = (rating, maxRating) => new Array(maxRating).fill(null).map((item, i) => this.getStar(rating - i - 1));

  render() {
    const { rating, maxRating } = this.props;

    return <ul className="star-rating">{this.renderStars(rating, maxRating)}</ul>;
  }
}
