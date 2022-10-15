import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { services13, services15, services12, services14 } from 'static/images';

const HomePageSelectAnOption = ({ title, text }) => (
  <main>
    <section className="content section-services add bg-before-darker">
      <Container fluid>
        <Row>
          <div className="content-select-option-wrap">
            <header className="section-head text-center text-white">
              {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
              <div className="text-box">{text && <p dangerouslySetInnerHTML={{ __html: text }} />}</div>
            </header>
            <Row>
              <Col md={6} className="box-service" as="article">
                <div className="box-holder">
                  <header className="head">
                    <h2>
                      Car <strong>finance</strong>
                    </h2>
                    <p>
                      <strong className="tag">
                        <span>
                          COMING
                          <br />
                          SOON
                        </span>
                      </strong>
                    </p>
                  </header>
                  <div className="img-thumbnail">
                    <picture>
                      <source srcSet={`${services12} 1x, ${services13} 2x`} media="(min-width: 1220px)" />
                      <img src={services13} alt="Social-value-people" />
                    </picture>
                  </div>
                </div>
              </Col>
              <Col md={6} className="box-service" as="article">
                <div className="box-holder">
                  <header className="head">
                    <h2>
                      Car <strong>warranties</strong>
                    </h2>
                    <p>
                      <strong className="tag">
                        <span>
                          COMING
                          <br />
                          SOON
                        </span>
                      </strong>
                    </p>
                  </header>
                  <div className="img-thumbnail">
                    <picture>
                      <source srcSet={`${services14} 1x, ${services15} 2x`} media="(min-width: 1220px)" />
                      <img src={services15} alt="Social-value-people" />
                    </picture>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </section>
  </main>
);

HomePageSelectAnOption.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default HomePageSelectAnOption;
