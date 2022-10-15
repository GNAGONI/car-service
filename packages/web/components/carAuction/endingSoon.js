import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';

import { auction4Mobile, auction4Mobile2x, auction4, auction42x } from 'static/images';
import AuctionPost from 'components/carAuctionResults/auctionPost';
import Slider, { SLIDER_COMMON_RESPONSIVE } from 'components/slider';
import SectionHeader from 'components/sectionHeader';

const auctionData = [
  {
    mobileImage: auction4Mobile,
    mobile2xImage: auction4Mobile2x,
    normalImage: auction4,
    normal2xImage: auction42x,
    name: '2006 Vauxhall Corsa 1.6 SRI',
    link: '#',
    price: 160,
    time: '22 mins 30 secs',
  },
  {
    mobileImage: auction4Mobile,
    mobile2xImage: auction4Mobile2x,
    normalImage: auction4,
    normal2xImage: auction42x,
    name: '2006 Vauxhall Corsa 1.6 SRI',
    link: '#',
    price: 160,
    time: '22 mins 30 secs',
  },
  {
    mobileImage: auction4Mobile,
    mobile2xImage: auction4Mobile2x,
    normalImage: auction4,
    normal2xImage: auction42x,
    name: '2006 Vauxhall Corsa 1.6 SRI',
    link: '#',
    price: 160,
    time: '22 mins 30 secs',
  },
  {
    mobileImage: auction4Mobile,
    mobile2xImage: auction4Mobile2x,
    normalImage: auction4,
    normal2xImage: auction42x,
    name: '2006 Vauxhall Corsa 1.6 SRI',
    link: '#',
    price: 160,
    time: '22 mins 30 secs',
  },
];

export default class EndingSoon extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    description: '',
  };

  renderAuctionPost = ({ mobileImage, mobile2xImage, normalImage, normal2xImage, name, link, price, time }) => (
    <AuctionPost
      mobileImage={mobileImage}
      mobile2xImage={mobile2xImage}
      normalImage={normalImage}
      normal2xImage={normal2xImage}
      isMaxWidth
      name={name}
      link={link}
      price={price}
      time={time}
      key={normalImage}
    />
  );

  render() {
    const { title, description } = this.props;

    return (
      <section className="content auction-featured bg-before-default">
        <Container>
          <Row>
            <Col>
              <SectionHeader title={title} subtitle={description} />
            </Col>
          </Row>
        </Container>
        <div className="content-holder">
          <div className="auction-slider">
            <Slider responsive={SLIDER_COMMON_RESPONSIVE}>
              {auctionData.map(post => this.renderAuctionPost(post))}
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
