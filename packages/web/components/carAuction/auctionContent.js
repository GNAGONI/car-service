import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';

import SectionHeader from 'components/sectionHeader';

const AuctionContent = ({ title, subtitle, description }) => (
  <Container>
    <Row>
      <Col>
        <section className="content auction-content pt-0 bg-before-default">
          <SectionHeader title={title} subtitle={subtitle} />

          {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
        </section>
      </Col>
    </Row>
  </Container>
);

AuctionContent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
};

AuctionContent.defaultProps = {
  title: '',
  subtitle: '',
  description: '',
};

export default AuctionContent;
