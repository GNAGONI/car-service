import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import cn from 'classnames';

import HeaderForm from 'components/instantQuote/HeaderForm';

const Intro = ({ title, text, formText }) => (
  <section className="intro intro-scrap-my-car">
    <span className="bg-tiers" />
    <Container>
      <Row>
        <Col>
          <div className={cn('search-area text-center', { add: formText })}>
            <header className="section-head">
              {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
              {text && (
                <div className="text-box">
                  <p dangerouslySetInnerHTML={{ __html: text }} />
                </div>
              )}
            </header>
            <HeaderForm formText={formText} />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

Intro.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  formText: PropTypes.string,
};

Intro.defaultProps = {
  title: '',
  text: '',
  formText: '',
};

export default Intro;
