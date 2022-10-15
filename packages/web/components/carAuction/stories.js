import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';

import { story4Mobile, story4Mobile2x, story4, story42x } from 'static/images';
import Slider, { SLIDER_COMMON_RESPONSIVE } from 'components/slider';
import SectionHeader from 'components/sectionHeader';

const storiesData = [
  {
    mobileImage: story4Mobile,
    mobile2xImage: story4Mobile2x,
    normalImage: story4,
    normal2xImage: story42x,
    name: 'Adam',
    city: 'London',
    link: '#',
    comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu',
  },
  {
    mobileImage: story4Mobile,
    mobile2xImage: story4Mobile2x,
    normalImage: story4,
    normal2xImage: story42x,
    name: 'Adam',
    city: 'London',
    link: '#',
    comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu',
  },
  {
    mobileImage: story4Mobile,
    mobile2xImage: story4Mobile2x,
    normalImage: story4,
    normal2xImage: story42x,
    name: 'Adam',
    city: 'London',
    link: '#',
    comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu',
  },
  {
    mobileImage: story4Mobile,
    mobile2xImage: story4Mobile2x,
    normalImage: story4,
    normal2xImage: story42x,
    name: 'Adam',
    city: 'London',
    link: '#',
    comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu',
  },
];

export default class Stories extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    description: '',
  };

  renderReview = ({ mobileImage, mobile2xImage, normalImage, normal2xImage, name, city, link, comment }) => (
    <article className="box-story" key={normalImage}>
      <div className="box-holder">
        <div className="img-thumbnail">
          <a href={link}>
            <picture>
              <source srcSet={`${mobileImage}, ${mobile2xImage} 2x`} media="(max-width: 767px)" />
              <source srcSet={`${normalImage}, ${normal2xImage} 2x"`} />
              <img src={normalImage} alt="description" width="380" height="516" />
            </picture>
          </a>
        </div>
        <div className="caption">
          <blockquote>
            <q>{comment}</q>
            <cite>
              {name} - {city}
            </cite>
          </blockquote>
        </div>
      </div>
    </article>
  );

  render() {
    const { title, description } = this.props;

    return (
      <section className="content section-stories pt-0 bg-default text-center">
        <Container>
          <Row>
            <Col>
              <SectionHeader title={title} subtitle={description} />
            </Col>
          </Row>
        </Container>
        <div className="content-holder">
          <Slider className="stories-slider" responsive={SLIDER_COMMON_RESPONSIVE}>
            {storiesData.map(review => this.renderReview(review))}
          </Slider>
        </div>
      </section>
    );
  }
}
