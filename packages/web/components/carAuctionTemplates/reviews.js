import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import RatingStars from 'components/ratingStars';
import Slider from 'components/slider';
import { reviews as reviewsData } from './constants';

class Reviews extends PureComponent {
  static propTypes = {
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        location: PropTypes.string,
        rating: PropTypes.number,
        review: PropTypes.string,
      }),
    ),
  };

  static defaultProps = {
    reviews: [],
  };

  renderHeader = () => (
    <header className="section-head text-center">
      <h2>Reviews from customers selling similar cars on Car.service</h2>
      <div className="text-box">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euis mod tincidunt ut laoreet
          dolorea am erat volutpat. Ut wisi enim ad minim veniam,
        </p>
        <div className="btn-block">
          <a href="#" className="btn btn-primary btn-ml">
            Auction your car
          </a>
        </div>
      </div>
    </header>
  );

  renderReview = ({ id, name, location, rating, review }) => (
    <article className="col-12 box-testimonial text-center" key={id}>
      <blockquote>
        <cite>
          <strong className="title">{name}</strong>
          <strong>{location}</strong>
        </cite>
        <RatingStars rating={rating} />
        <q>{review}</q>
      </blockquote>
    </article>
  );

  render() {
    const { reviews } = this.props;

    return (
      <section className="content section-testimonials single-slide bg-before-info">
        <Container>
          <Row>
            <Col>{this.renderHeader()}</Col>
          </Row>
        </Container>
        <div className="content-holder">
          <div className="testimonial-slider-single">
            <Slider slidesToShow={2}>{reviews.map(review => this.renderReview(review))}</Slider>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = () => ({ reviews: reviewsData });
export default connect(mapStateToProps)(Reviews);
