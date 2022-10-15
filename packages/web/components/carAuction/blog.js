import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';

import Slider, { SLIDER_COMMON_RESPONSIVE } from 'components/slider';
import SectionHeader from 'components/sectionHeader';
import { media2mobile, media2Mobile2x, media2, media22x } from 'static/images';

const blogData = [
  {
    mobileImage: media2mobile,
    mobile2xImage: media2Mobile2x,
    normalImage: media2,
    normal2xImage: media22x,
    date: '02/04/18',
    type: 'Guide',
    title: 'How to improve fuel efficiency',
    link: '#',
  },
  {
    mobileImage: media2mobile,
    mobile2xImage: media2Mobile2x,
    normalImage: media2,
    normal2xImage: media22x,
    date: '02/04/18',
    type: 'Guide',
    title: 'How to improve fuel efficiency',
    link: '#',
  },
  {
    mobileImage: media2mobile,
    mobile2xImage: media2Mobile2x,
    normalImage: media2,
    normal2xImage: media22x,
    date: '02/04/18',
    type: 'Guide',
    title: 'How to improve fuel efficiency',
    link: '#',
  },
  {
    mobileImage: media2mobile,
    mobile2xImage: media2Mobile2x,
    normalImage: media2,
    normal2xImage: media22x,
    date: '02/04/18',
    type: 'Guide',
    title: 'How to improve fuel efficiency',
    link: '#',
  },
];

export default class Blog extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    description: '',
  };

  renderBlogPost = ({ mobileImage, mobile2xImage, normalImage, normal2xImage, date, type, title, link }) => (
    <article className="box-story post" key={normalImage}>
      <div className="box-holder post-holder">
        <div className="img-thumbnail">
          <picture>
            <source srcSet={`${mobileImage}, ${mobile2xImage} 2x"`} media="(max-width: 767px)" />
            <source srcSet={`${normalImage}, ${normal2xImage} 2x"`} />
            <img src={normalImage} alt="Estimating the cost of fuel for a trip" width="380" height="418" />
          </picture>
        </div>
        <ul className="meta">
          <li>
            <time dateTime="2018-04-02">{date}</time>
          </li>
          <li>
            <a href="#">{type}</a>
          </li>
        </ul>
        <div className="caption">
          <h2>
            <a href="#">{title}</a>
          </h2>
          <div className="btn-block">
            <a href={link} className="read-more">
              Read more
            </a>
          </div>
        </div>
      </div>
    </article>
  );

  render() {
    const { title, description } = this.props;

    return (
      <section className="content bg-default posts-overlay section-blog">
        <Container>
          <Row>
            <Col>
              <SectionHeader title={title} subtitle={description} />
            </Col>
          </Row>
        </Container>
        <div className="content-holder">
          <div className="posts-slideshow">
            <Slider className="stories-slider" responsive={SLIDER_COMMON_RESPONSIVE}>
              {blogData.map(post => this.renderBlogPost(post))}
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
