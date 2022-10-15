import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';

const ModelContent = ({ content }) => (
  <Container className="model-container">
    <Row>
      <Col>
        <section className="content extend section-model bg-before-info">
          {content ? <div dangerouslySetInnerHTML={{ __html: content }} /> : null}
        </section>
      </Col>
    </Row>
  </Container>
);

ModelContent.propTypes = {
  content: PropTypes.string,
};

ModelContent.defaultProps = {
  content: '',
};

export default ModelContent;
