import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';

const SocialValuePartnersImpactHeader = ({ title, text }) => (
  <Row className="gratitude__head">
    <header className="section-head">
      {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
      {text && <p dangerouslySetInnerHTML={{ __html: text }} />}
    </header>
  </Row>
);

SocialValuePartnersImpactHeader.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default SocialValuePartnersImpactHeader;
