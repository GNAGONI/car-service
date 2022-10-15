import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { homepageBg2x, homepageBg } from 'static/images';
import TableForm from 'components/instantQuote/TableForm';

const HomePageIntro = ({ title, text }) => (
  <section className="intro">
    <span className="bg-tiers" />
    <div className="intro-slider slick-initialized slick-slider">
      <div className="slick-list draggable">
        <div className="slick-track">
          <div className="slide slick-slide slick-current slick-active">
            <Container>
              <Row>
                <Col className="slide-holder same-height-left same-height-right">
                  {title && <h1 dangerouslySetInnerHTML={{ __html: title }} />}
                  <div className="img-area">
                    <picture>
                      <source srcSet={`${homepageBg2x}, ${homepageBg} 2x`} media="(min-width: 1220px)" />
                      <img src={homepageBg2x} alt="Auctions" />
                    </picture>
                  </div>
                  <div className="text-box">{text && <p dangerouslySetInnerHTML={{ __html: text }} />}</div>
                  <div className="homePage-form">
                    <TableForm buttonText="Get a quote" />
                  </div>
                </Col>
              </Row>
            </Container>
            <Row>
              <div className="divide-row" />
            </Row>
          </div>
        </div>
      </div>
    </div>
  </section>
);

HomePageIntro.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default HomePageIntro;
