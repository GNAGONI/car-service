import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';

import SectionHeader from 'components/sectionHeader';
import CommonSlider, { SLIDER_COMMON_RESPONSIVE } from 'components/slider';
import { iconGarages, iconMap, iconTrade, iconPayment, iconSellingFee } from 'static/images/icons';

const benefitsData = [
  {
    title: 'Advertise to over 16k garages',
    imgSrc: iconGarages,
  },
  {
    title: 'Free nationwide collection',
    imgSrc: iconMap,
  },
  {
    title: 'Best trade price for your car',
    imgSrc: iconTrade,
  },
  {
    title: 'Guarenteed payment',
    imgSrc: iconPayment,
  },
  {
    title: 'Industry low selling fee’s',
    imgSrc: iconSellingFee,
  },
];

export default class Benefits extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    subtitle: '',
  };

  renderBoxScrap = ({ title, imgSrc }) => (
    <article key={`${title}_${imgSrc}`} className="box-scrap text-center">
      <div className="box-holder d-flex flex-column justify-content-between">
        <h3>{title}</h3>
        <div className="img-thumbnail">
          <img src={imgSrc} alt={title} width="91" height="67" />
        </div>
      </div>
    </article>
  );

  render() {
    const { title, subtitle } = this.props;

    return (
      <section className="content section-scraping bg-default">
        <Container>
          <Row>
            <Col>
              <SectionHeader title={title} subtitle={subtitle} />
            </Col>
          </Row>
        </Container>

        <div className="content-holder scrap-slideshow">
          <CommonSlider className="scrap-slider stories-slider" slidesToShow={5} responsive={SLIDER_COMMON_RESPONSIVE}>
            {benefitsData.map(benefit => this.renderBoxScrap(benefit))}
          </CommonSlider>
        </div>
      </section>
    );
  }
}
